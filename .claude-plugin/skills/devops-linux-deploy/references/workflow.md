# Deployment Workflow (Decision Tree)

Use this as the main flow for producing instructions, configs, and docs.

1) Inspect the repo
- Detect stack: package.json, next.config.js, prisma/, Dockerfile, docker-compose.yml, manage.py, pyproject.toml, requirements.txt
- Read scripts: build/start, ports, output folder (dist, build, .next, out)
- For Django: locate settings module, WSGI/ASGI entrypoint, static/media paths
- Note env variables from README, .env.example, or code

2) Choose deployment mode
- Static frontend: build assets and serve via Nginx
- Node backend: run via pm2 or systemd behind Nginx reverse proxy
- Next.js: run via node (next start or standalone build) behind Nginx
- Django WSGI: gunicorn behind Nginx reverse proxy
- Django ASGI: uvicorn/daphne behind Nginx reverse proxy
- Dockerized: use docker-compose or Dockerfile deployment

3) Provision server (OS-specific)
- Create deploy user, install base packages, Node, Nginx
- Configure firewall (ufw/firewalld) if requested

4) Set up directories
- Use a stable layout (see directory-layout.md)
- Store configs in /etc/nginx and service in /etc/systemd

5) Configure runtime
- Node: install version, install deps, build
- Python: create venv, install deps, migrate, collectstatic
- DB: Postgres local or managed; Prisma migrations
- Process manager: pm2 or systemd

6) Configure Nginx
- Use template from assets/
- Enable site, test and reload

7) Validate
- Check app health on localhost
- Verify Nginx reverse proxy and SSL

8) Deliverables
- Provide step-by-step instructions
- Provide final Nginx config
- Create docs.md when requested (use assets/docs-template.md)
