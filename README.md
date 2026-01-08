# Devops Linux Deploy Skill

Deployment guidance for Linux servers running Nginx with Node.js, Next.js,
Python/Django (WSGI/ASGI), or static frontends. Includes Postgres, Docker,
process managers, and CI/CD notes.

This skill is compatible with both **Codex CLI** and **Claude Code**.

---

## Supported Stacks

| Stack | Runtime | Process Manager | Nginx Mode |
| --- | --- | --- | --- |
| Static frontend | build output | N/A | static |
| Node API | Node LTS | systemd/pm2 | reverse proxy |
| Next.js | Node LTS | systemd/pm2 | reverse proxy |
| Django WSGI | Python venv | systemd + gunicorn | reverse proxy |
| Django ASGI | Python venv | systemd + uvicorn | reverse proxy |
| Docker | container | docker-compose | reverse proxy |

---

## Installation

### Claude Code

#### Option A: Clone and symlink (recommended for development)

```bash
git clone https://github.com/YOUR_USERNAME/devops-linux-deploy.git
mkdir -p ~/.claude/skills
ln -s "$(pwd)/devops-linux-deploy/.claude/skills/devops-linux-deploy" ~/.claude/skills/devops-linux-deploy
```

#### Option B: Copy into Claude Code skills

```bash
git clone https://github.com/YOUR_USERNAME/devops-linux-deploy.git
mkdir -p ~/.claude/skills
cp -R devops-linux-deploy/.claude/skills/devops-linux-deploy ~/.claude/skills/
```

#### Option C: Project-level installation

Copy the `.claude` folder into your project root:

```bash
cp -R devops-linux-deploy/.claude /path/to/your/project/
```

#### Verify Claude Code installation

```bash
test -f ~/.claude/skills/devops-linux-deploy/skill.md && echo "Skill installed"
```

---

### Codex CLI

#### Requirements

- Codex CLI installed and configured
- Access to `$CODEX_HOME` (defaults to `~/.codex`)

#### Option A: Clone and symlink (recommended for development)

```bash
git clone https://github.com/YOUR_USERNAME/devops-linux-deploy.git
mkdir -p "$CODEX_HOME/skills/custom"
ln -s "$(pwd)/devops-linux-deploy" "$CODEX_HOME/skills/custom/devops-linux-deploy"
```

#### Option B: Copy into Codex skills

```bash
git clone https://github.com/YOUR_USERNAME/devops-linux-deploy.git
mkdir -p "$CODEX_HOME/skills/custom"
cp -R devops-linux-deploy "$CODEX_HOME/skills/custom/"
```

#### Verify Codex installation

```bash
test -f "$CODEX_HOME/skills/custom/devops-linux-deploy/SKILL.md" && echo "Skill installed"
```

#### Use in Codex

Run the superpowers bootstrap once per session:

```bash
~/.codex/superpowers/.codex/superpowers-codex bootstrap
```

Load the skill on demand:

```bash
~/.codex/superpowers/.codex/superpowers-codex use-skill devops-linux-deploy
```

---

## Repository Structure

```
devops-linux-deploy/
├── README.md                           # This file
├── SKILL.md                            # Codex skill definition
├── assets/                             # Config templates (Codex)
│   ├── nginx_site.conf
│   ├── nginx_static.conf
│   ├── systemd-node.service
│   ├── systemd-django-gunicorn.service
│   ├── systemd-django-uvicorn.service
│   ├── pm2-ecosystem.config.js
│   ├── docker-compose.node-postgres.yml
│   ├── docker-compose.django-postgres.yml
│   └── docs-template.md
├── references/                         # Reference docs (Codex)
│   ├── inputs.md
│   ├── workflow.md
│   ├── ubuntu.md
│   ├── fedora.md
│   ├── nginx.md
│   ├── node-runtime.md
│   ├── python-runtime.md
│   ├── django.md
│   ├── postgres.md
│   ├── prisma-supabase.md
│   ├── ci-cd.md
│   ├── docker.md
│   └── directory-layout.md
└── .claude/
    └── skills/
        └── devops-linux-deploy/        # Claude Code skill
            ├── skill.md
            ├── assets/                 # Config templates
            └── references/             # Reference docs
```

---

## What This Skill Does

When invoked, this skill helps you:

1. **Gather requirements** - Domain, OS, app type, database, process manager
2. **Inspect your repo** - Detect stack, build commands, ports, env vars
3. **Generate deployment configs** - Nginx, systemd, pm2, Docker Compose
4. **Provide step-by-step instructions** - Server setup, SSL, database, CI/CD

---

## Updating

**If installed via symlink:** Pull the latest changes and restart your session.

```bash
cd /path/to/devops-linux-deploy
git pull
```

**If installed via copy:** Re-run the copy step after pulling changes.

---

## License

MIT
