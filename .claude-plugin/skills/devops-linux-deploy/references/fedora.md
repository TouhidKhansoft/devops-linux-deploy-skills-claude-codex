# Fedora Server Setup Notes

- Update: dnf -y upgrade
- Base packages: curl git firewalld gcc-c++ make ca-certificates
- Nginx: dnf -y install nginx
- Node.js: use dnf module or nvm; align with package.json engines
- Enable Nginx: systemctl enable --now nginx
- Firewall (optional): firewall-cmd --permanent --add-service=http --add-service=https; firewall-cmd --reload
