# Docker Deployment Notes

- If docker-compose.yml exists, prefer it
- Otherwise create a minimal compose file with app + db
- Use named volumes for Postgres
- Keep secrets in .env and pass with env_file
- Expose only Nginx to the public, keep app/db private
- For Django, ensure static/media are mounted or collected at build
