# Python Runtime Notes

- Install Python 3.x from OS packages or pyenv if specific version required
- Create a venv in `/srv/app/venv` and install deps with pip
- Prefer `requirements.txt` or `pyproject.toml`/`poetry.lock` for dependencies
- Keep secrets in `/srv/app/shared/.env` and load via systemd `EnvironmentFile`
- Use `gunicorn` for WSGI or `uvicorn` for ASGI
