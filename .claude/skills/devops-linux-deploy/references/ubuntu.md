# Ubuntu Server Setup Notes

- Update: apt update && apt -y upgrade
- Base packages: curl git ufw build-essential ca-certificates
- Nginx: apt -y install nginx
- Node.js: prefer NodeSource or nvm; align with package.json engines
- Enable Nginx: systemctl enable --now nginx
- Firewall (optional): ufw allow OpenSSH; ufw allow 'Nginx Full'
