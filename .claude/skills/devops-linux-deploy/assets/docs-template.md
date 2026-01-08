# Deployment Guide

## Summary
- App: <app-name>
- OS: <ubuntu|fedora>
- Domain: <domain>
- Runtime: <node/pm2/systemd/docker>
- DB: <postgres/supabase/none>

## Prerequisites
- <list required packages and versions>
- <firewall rules if needed>

## Directory Layout
- /srv/<app>/repo
- /srv/<app>/shared

## Install and Configure
1) Create deploy user
2) Install Node, Nginx
3) Clone repo and install deps
4) Build the app

## Environment
- Put .env at /srv/<app>/shared/.env
- Required vars: <list>

## Database
- <steps for Postgres or Supabase>
- Prisma: npx prisma migrate deploy

## Process Manager
- pm2 or systemd steps

## Nginx
- Add server block
- Test and reload

## SSL
- certbot steps (if requested)

## Verification
- curl localhost
- curl https://<domain>
