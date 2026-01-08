# Directory Layout Best Practice

Use a consistent layout per app:

- /srv/<app>/repo        (git clone)
- /srv/<app>/shared      (env, uploads, logs)
- /srv/<app>/releases    (optional, for versioned releases)
- /etc/nginx/sites-available/<app>.conf
- /etc/systemd/system/<app>.service

Keep secrets in /srv/<app>/shared/.env with strict permissions.
