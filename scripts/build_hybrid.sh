#!/bin/bash
# Build the HYBRID pbw: branch UI binaries for basalt+emery, v1.7.2 binaries
# for aplite+diorite+flint. Flint (and the 1-bit targets on this SDK) crash
# with the branch's custom menu renderer (App fault PC=0 LR=0, reproduces on
# the clean develop baseline), so those platforms keep the v1.7.2 firmware-known
# build. messageKeys are identical between v1.7.2 and the branch, so the shared
# JS bundle (always taken from the branch) drives both binary sets.
#
# Spacing detail: v1.7.2 builds get the glued detail line ("16:05+12 3/5IC3514")
# via scripts/v1.7.2-glued-detail-line.patch; on the branch it is per-platform
# (emery keeps spaces, see departures_screen.c guards).
#
# Usage:  scripts/build_hybrid.sh [output.pbw]
# Requires: pebble-tool + SDK 4.44 on PATH (see DEVSETUP.md).
#
# IMPORTANT: never run a plain `pebble build` with the 5-platform package.json
# AFTER this script — it rewrites build/rozklad_jazdy_pociagow.pbw with branch
# binaries for all platforms (flint included, which then crashes). Always finish
# with this script's merge.
set -euo pipefail

OUT="${1:-build/rozklad_jazdy_pociagow.pbw}"
WT=/tmp/wt-v172-hybrid
HERE="$(cd "$(dirname "$0")/.." && pwd)"
cd "$HERE"

# Network for git/pebble works direct; proxies in the environment break fetches.
export PATH="$HOME/.local/share/pebble-sdk/SDKs/4.44/bin:$HOME/.local/bin:$PATH"
unset HTTPS_PROXY HTTP_PROXY ALL_PROXY https_proxy http_proxy all_proxy
export NO_PROXY='*'

set_platforms() { # <file> <json-array>
  python3 - "$1" "$2" <<'PY'
import json, sys
d = json.load(open(sys.argv[1]))
d['pebble']['targetPlatforms'] = json.loads(sys.argv[2])
json.dump(d, open(sys.argv[1], 'w'), indent=2, ensure_ascii=False)
PY
}

# 1) Branch -> basalt + emery only.
cp package.json /tmp/package.json.hybrid-bak
trap 'mv -f /tmp/package.json.hybrid-bak "$HERE/package.json"' EXIT
set_platforms package.json '["basalt","emery"]'
pebble build clean >/dev/null 2>&1 || true
pebble build >/dev/null
cp build/rozklad_jazdy_pociagow.pbw /tmp/pbw-head.hybrid
mv -f /tmp/package.json.hybrid-bak package.json
trap - EXIT

# 2) v1.7.2 worktree -> aplite + diorite + flint, with the glued-detail patch.
git worktree remove --force "$WT" 2>/dev/null || true
git worktree add --detach "$WT" v1.7.2 >/dev/null
(
  cd "$WT"
  git apply "$HERE/scripts/v1.7.2-glued-detail-line.patch"
  set_platforms package.json '["aplite","diorite","flint"]'
  pebble build >/dev/null
)
# Artifact name follows the project directory basename.
OLD="/tmp/$(basename "$WT").pbw"
cp "$WT/build/$(basename "$WT").pbw" "$OLD"

# 3) Merge: appinfo + JS bundle from the branch, binaries per platform.
mkdir -p "$(dirname "$OUT")"
python3 - /tmp/pbw-head.hybrid "$OLD" "$OUT" <<'PY'
import sys, zipfile, hashlib, json
head_p, old_p, out_p = sys.argv[1:4]
head = zipfile.ZipFile(head_p)
old = zipfile.ZipFile(old_p)
LEGACY = ('aplite', 'diorite', 'flint')
ALL_PLATFORMS = ['aplite', 'basalt', 'diorite', 'emery', 'flint']
with zipfile.ZipFile(out_p, 'w', zipfile.ZIP_DEFLATED) as out:
    for n in head.namelist():
        if n.split('/')[0] not in LEGACY:
            data = head.read(n)
            if n == 'appinfo.json':
                # Head was built with a restricted package.json; the merged
                # package must declare every platform whose binary ships.
                ai = json.loads(data)
                if 'targetPlatforms' in ai:
                    ai['targetPlatforms'] = ALL_PLATFORMS
                for v in ai.values():
                    if isinstance(v, dict) and 'targetPlatforms' in v:
                        v['targetPlatforms'] = ALL_PLATFORMS
                data = json.dumps(ai).encode()
            out.writestr(n, data)
    for n in old.namelist():
        if n.split('/')[0] in LEGACY:
            out.writestr(n, old.read(n))
# verify
z = zipfile.ZipFile(out_p)
assert z.testzip() is None
plats = sorted({n.split('/')[0] for n in z.namelist() if '/' in n})
assert plats == ALL_PLATFORMS, plats
ai = json.loads(z.read('appinfo.json'))
for tp in [ai.get('targetPlatforms')] + [
        v['targetPlatforms'] for v in ai.values()
        if isinstance(v, dict) and 'targetPlatforms' in v]:
    if tp is not None:
        assert sorted(tp) == ALL_PLATFORMS, tp
def md5(zf, n): return hashlib.md5(zf.read(n)).hexdigest()
for pf, src in [('flint', old), ('aplite', old), ('diorite', old),
                ('basalt', head), ('emery', head)]:
    n = pf + '/pebble-app.bin'
    assert md5(z, n) == md5(src, n), f'{pf} binary does not match its source pbw'
print('hybrid OK:', out_p, plats)
PY

case "$OUT" in /*) SRV_DIR=$(dirname "$OUT");; *) SRV_DIR="$HERE/$(dirname "$OUT")";; esac
echo "Serve with: (cd $SRV_DIR && python3 -m http.server 8077)"
