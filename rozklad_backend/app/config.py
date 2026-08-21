import os
from pathlib import Path

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass


class Settings:
    pdp_api_key: str = os.getenv("PDP_API_KEY", "")
    pdp_base_url: str = os.getenv("PDP_BASE_URL", "https://pdp-api.plk-sa.pl")
    host: str = os.getenv("HOST", "0.0.0.0")
    port: int = int(os.getenv("PORT", "8000"))


settings = Settings()
