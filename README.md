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

### Claude Code (Plugin Marketplace)

#### Option A: Install via Plugin Command (Recommended)

First, add the marketplace:

```
/plugin marketplace add TouhidKhansoft/devops-linux-deploy-skills-claude-codex
```

Then install the plugin:

```
/plugin install devops-linux-deploy@touhidkhansoft-skills
```

#### Option B: Clone and symlink (for development)

```bash
git clone https://github.com/TouhidKhansoft/devops-linux-deploy-skills-claude-codex.git
cd devops-linux-deploy-skills-claude-codex
mkdir -p ~/.claude/skills
ln -s "$(pwd)/.claude/skills/devops-linux-deploy" ~/.claude/skills/devops-linux-deploy
```

#### Option C: Copy into Claude Code skills

```bash
git clone https://github.com/TouhidKhansoft/devops-linux-deploy-skills-claude-codex.git
mkdir -p ~/.claude/skills
cp -R devops-linux-deploy-skills-claude-codex/.claude/skills/devops-linux-deploy ~/.claude/skills/
```

#### Option D: Project-level installation

Copy the `.claude` folder into your project root:

```bash
git clone https://github.com/TouhidKhansoft/devops-linux-deploy-skills-claude-codex.git
cp -R devops-linux-deploy-skills-claude-codex/.claude /path/to/your/project/
```

#### Verify Claude Code installation

```bash
test -f ~/.claude/skills/devops-linux-deploy/skill.md && echo "Skill installed"
```

#### Plugin Management Commands

```
/plugin list                         # List installed plugins
/plugin remove devops-linux-deploy   # Remove the plugin
/plugin marketplace list             # List known marketplaces
```

---

### Codex CLI

#### Requirements

- Codex CLI installed and configured
- Access to `$CODEX_HOME` (defaults to `~/.codex`)

#### Option A: Clone and symlink (recommended for development)

```bash
git clone https://github.com/TouhidKhansoft/devops-linux-deploy-skills-claude-codex.git
mkdir -p "$CODEX_HOME/skills/custom"
ln -s "$(pwd)/devops-linux-deploy-skills-claude-codex" "$CODEX_HOME/skills/custom/devops-linux-deploy"
```

#### Option B: Copy into Codex skills

```bash
git clone https://github.com/TouhidKhansoft/devops-linux-deploy-skills-claude-codex.git
mkdir -p "$CODEX_HOME/skills/custom"
cp -R devops-linux-deploy-skills-claude-codex "$CODEX_HOME/skills/custom/devops-linux-deploy"
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
devops-linux-deploy-skills-claude-codex/
├── README.md                           # This file
├── LICENSE                             # MIT License
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
├── .claude/
│   └── skills/
│       └── devops-linux-deploy/        # Claude Code skill (auto-load)
│           ├── skill.md
│           ├── assets/
│           └── references/
└── .claude-plugin/                     # Claude Code plugin (marketplace)
    ├── plugin.json                     # Plugin manifest
    ├── marketplace.json                # Marketplace catalog
    └── skills/
        └── devops-linux-deploy/
            ├── skill.md
            ├── assets/
            └── references/
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

**If installed via plugin:**
```
/plugin marketplace update
```

**If installed via symlink:** Pull the latest changes and restart your session.

```bash
cd /path/to/devops-linux-deploy-skills-claude-codex
git pull
```

**If installed via copy:** Re-run the copy step after pulling changes.

---

## Author

**TouhidKhansoft** - [GitHub](https://github.com/TouhidKhansoft)

## License

MIT
