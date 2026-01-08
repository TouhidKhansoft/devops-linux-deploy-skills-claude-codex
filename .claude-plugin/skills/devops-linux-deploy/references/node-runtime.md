# Node Runtime Notes

Choose process manager based on needs:

- pm2: quick, easy logs, clustering
- systemd: native, minimal, predictable

pm2 basics:
- Install globally: npm i -g pm2
- Start: pm2 start <entry> --name <app>
- Save: pm2 save; enable startup: pm2 startup

systemd basics:
- Create unit in /etc/systemd/system/<app>.service
- Reload: systemctl daemon-reload
- Enable/start: systemctl enable --now <app>
