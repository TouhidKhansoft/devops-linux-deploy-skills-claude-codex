# Nginx Notes

Use server blocks with clear upstreams and timeouts.

- Static frontend: root to build output (dist, build, or out)
- Node backend: proxy_pass to localhost port
- Add headers: X-Forwarded-For, Host, X-Real-IP
- Keep config in /etc/nginx/sites-available and symlink to sites-enabled (Debian/Ubuntu)
- Fedora may use /etc/nginx/conf.d/*.conf

Prefer testing: nginx -t and systemctl reload nginx
