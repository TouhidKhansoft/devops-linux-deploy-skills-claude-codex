---
name: devops-linux-deploy
description: Use when deploying Node.js, Next.js, or Python/Django apps or static frontends on Ubuntu/Fedora with Nginx, SSL, process managers, Postgres, Docker, or CI/CD guidance.
---

# Devops Linux Deploy

## Overview
Provide complete, best-practice deployment guidance for Linux servers running Nginx with Node.js, Next.js, Python/Django (WSGI/ASGI), or static frontends, including database setup, process management, Docker, and optional CI/CD.

## When to Use
- Asked for step-by-step Linux deployment instructions
- Need Nginx reverse proxy or static hosting guidance
- App stack is Node.js, Next.js, Python/Django, or Dockerized
- Need process manager setup (systemd/pm2) or WSGI/ASGI app server setup
- Need Postgres, Prisma, or Supabase notes alongside deployment

## Workflow (Use in Order)
1) Read required inputs in `references/inputs.md` and ask for missing details.
2) Inspect the repo to detect stack, build outputs, ports, and env vars.
3) Choose deployment mode (static, Node API, Next.js, Django WSGI, Django ASGI, or Docker).
4) Use OS notes (`references/ubuntu.md` or `references/fedora.md`).
5) Plan directory layout using `references/directory-layout.md`.
6) Configure runtime (Node or Python) using `references/node-runtime.md` or `references/python-runtime.md`.
7) Configure app server (pm2/systemd, Gunicorn/Uvicorn) using templates in `assets/`.
8) Configure Nginx using `references/nginx.md` and templates in `assets/`.
9) Add DB guidance using `references/postgres.md` and `references/prisma-supabase.md`.
10) If Docker is requested, use `references/docker.md` and compose templates in `assets/`.
11) If CI/CD is requested, use `references/ci-cd.md`.
12) Deliver outputs (instructions, configs, or docs.md).

## Outputs
- Step-by-step instructions for server setup and deployment
- Final Nginx config (reverse proxy or static)
- Best-practice directory structure
- docs.md file when requested (use `assets/docs-template.md`)
- systemd service for Gunicorn or Uvicorn when deploying Django
- Docker compose for Django + Postgres when requested

## Templates and References
- Nginx templates: `assets/nginx_site.conf`, `assets/nginx_static.conf`
- Process manager templates: `assets/systemd-node.service`, `assets/pm2-ecosystem.config.js`
- Django service templates: `assets/systemd-django-gunicorn.service`, `assets/systemd-django-uvicorn.service`
- Docker compose templates: `assets/docker-compose.node-postgres.yml`, `assets/docker-compose.django-postgres.yml`
- OS setup notes: `references/ubuntu.md`, `references/fedora.md`
- Database notes: `references/postgres.md`, `references/prisma-supabase.md`
- CI/CD notes: `references/ci-cd.md`
- Directory layout: `references/directory-layout.md`
- Python runtime: `references/python-runtime.md`
- Django specifics: `references/django.md`
- Primary workflow: `references/workflow.md`

## Quick Reference

| Stack | Runtime | Process manager | Nginx mode | Notes |
| --- | --- | --- | --- | --- |
| Static frontend | build output | N/A | static | `root` to dist/build |
| Node API | Node LTS | systemd/pm2 | reverse proxy | `proxy_pass` to localhost |
| Next.js | Node LTS | systemd/pm2 | reverse proxy | `next start` or standalone |
| Django WSGI | Python venv | systemd + gunicorn | reverse proxy | `config.wsgi:application` |
| Django ASGI | Python venv | systemd + uvicorn | reverse proxy | `config.asgi:application` |
| Docker | container | docker-compose | reverse proxy | only Nginx public |

## Example: Django ASGI (Uvicorn + systemd + Nginx)

```ini
# /etc/systemd/system/django-uvicorn.service
[Unit]
Description=Django ASGI via Uvicorn
After=network.target

[Service]
User=deploy
WorkingDirectory=/srv/app/repo
EnvironmentFile=/srv/app/shared/.env
ExecStart=/srv/app/venv/bin/uvicorn config.asgi:application --host 127.0.0.1 --port 8001
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```nginx
location / {
  proxy_pass http://127.0.0.1:8001;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

## Common Mistakes
- Skipping `collectstatic` and missing `/static/` Nginx location
- Forgetting `ALLOWED_HOSTS` or `CSRF_TRUSTED_ORIGINS`
- Exposing Gunicorn/Uvicorn directly to the public internet
- Mixing WSGI and ASGI servers for the same entrypoint
- Missing `EnvironmentFile` or incorrect venv path in systemd

## Red Flags
- No clear app server choice (Gunicorn for WSGI or Uvicorn for ASGI)
- Nginx points at `0.0.0.0` or public gunicorn port
- Secrets committed to git instead of shared `.env`

## Rationalizations to Avoid

| Rationalization | Reality |
| --- | --- |
| "Just add Django in the overview" | Workflow and templates must change too |
| "Minimal edits are safer" | Missing runtime/app server steps breaks deployments |
| "Doc-only changes don't need checks" | Skills require the same rigor as code |

## Rules of Thumb
- Default to least-privileged users and minimal exposure.
- Keep secrets out of git; prefer .env in shared directory.
- Test Nginx configs before reload.
- Provide commands in the exact order to run.
- If repo analysis is requested, list inferred prerequisites explicitly.
- For Django, run migrations and collectstatic as part of release.
