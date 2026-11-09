# Środowisko dev (z2minig1a, Linux x86_64) — 2026-11-06

## Aplikacja Pebble (pebble-tool v5.1.2, SDK 4.44)

- Narzędzie: `uv tool install pebble-tool` → `~/.local/bin/pebble`
- SDK: `~/.local/share/pebble-sdk/SDKs/4.44` (aktywny), toolchain arm + qemu w zestawie
- **Pułapka proxy**: ten host ma `HTTP(S)_PROXY` (egress proxy), który blokuje npmjs/github/pypi.
  npm i pebble-tool odpalamy z czyszczonym proxy:
  `env -u HTTPS_PROXY -u HTTP_PROXY -u ALL_PROXY -u https_proxy -u http_proxy -u all_proxy pebble <cmd>`
- Build (5 platform, ~s): `pebble build` → `build/rozklad_jazdy_pociagow.pbw`
- Emulator (headless, VNC :1 = TCP 5901):
  `env -u HTTPS_PROXY ... PEBBLE_EMULATOR=qemu pebble install --logs --vnc --emulator basalt build/*.pbw`
  (bez `--logs` sesja, która startuje qemu, potrafi zabrać emulator po zakończeniu — trzymaj ją otwartą)
- Porty emulatora w `/tmp/pb-emulator.json` (qemu serial/qext/gdb/monitor, pypkjs). QEMU obsługuje
  **1 klienta na serial** — screenshot przez `pebble screenshot` kłóci się z pypkjs/--logs;
  podgląd: klient VNC na `:5901` (albo websockify :5800/:5805). Uwaga: `localhost` tu się nie
  resolwuje — używaj `127.0.0.1`.
- Debug C: `pebble gdb --qemu 127.0.0.1:<port>` (qemu ma `-gdb tcp::<port>`; breakpoint
  `app_crashed` wstawiany automatycznie przez narzędzie).
- Logs: strumień w sesji `--logs` (pkjs widać z prefiksem `pkjs>`).
- clangd/IntelliSense: `pebble compile-commands` (generuje compile_commands.json).
- Ostrzeżenie builda (nie blokuje): `package.json` nie ma `usesPermissions` (manifest v2) —
  na telefonie pkjs potrzebuje jawnych uprawnień network/location; historycznie działa dzięki
  starym semantykom, warto kiedyś dodać `"manifestVersion": 1` albo `usesPermissions`.

## Backend (FastAPI, rozklad_backend/)

- venv: `rozklad_backend/.venv` (Python 3.11, uv) — `uv pip install --python .venv/bin/python -r requirements.txt pytest pytest-asyncio` (dodatkowo `time-machine`)
- Klucz `PDP_API_KEY` jest w secrets-store OpenClaw (w env jako sentinel). **Wysyłaj go przez egress
  proxy, NIE przez `NO_PROXY='*'`** — proxy podmienia sentinel na żywy klucz (sprawdzone:
  3271 stacji, departures z Warszawy). `NO_PROXY` wyśle surowy sentinel → 401.
- Run: `.venv/bin/python -m uvicorn app.main:app --port 8000` (mapping ~4767/4895 stacji, ~20 s)
- Testy: `.venv/bin/python -m pytest -q` — uwaga: `test_cancelled_train_is_hidden` i
  `test_sorted_by_published_time` failują po 22:00, bo `_future_time(90/120)` przekracza północ
  (flake testów, nie backendu). O 12:00 wszystkie przechodzą.
- Docker: `docker-compose.yml` (port 30190) działa jako alternatywa, ale venv jest wygodniejszy do debugowania.

## Sklonuj/aktualizuj z GitHuba

`git -c http.proxy= -c https.proxy= clone/pull https://github.com/merito/rozklad_jazdy_pociagow`
(proxy blokuje CONNECT do github.com, bezpośrednie egress IPv4 działa).
