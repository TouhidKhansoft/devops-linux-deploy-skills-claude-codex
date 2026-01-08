# Required Inputs

Collect missing details before proposing exact commands. Ask only for what is needed.

- Repo URL, branch/tag, and deploy user
- Domain(s) and desired SSL (default: Let's Encrypt)
- Target OS: Ubuntu or Fedora (version if known)
- App type: static frontend, Node API, Next.js, Django (WSGI/ASGI), monorepo, or Docker
- Build/start commands and ports (or infer from repo)
- Python version and virtualenv location (if Django)
- WSGI/ASGI entrypoint (e.g., config.wsgi:application or config.asgi:application)
- Static/media paths and whether `collectstatic` should run
- Environment variables and secrets (.env content or secret manager)
- Database choice: local Postgres vs managed (Supabase) and credentials
- Process manager: pm2/systemd for Node, systemd + gunicorn/uvicorn for Django (or Docker)
- CI/CD: GitHub Actions or manual

If any of these cannot be inferred from the repo, ask briefly before finalizing.
