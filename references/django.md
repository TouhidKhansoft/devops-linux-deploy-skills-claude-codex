# Django Deployment Notes

- Use `config.wsgi:application` for WSGI (Gunicorn)
- Use `config.asgi:application` for ASGI (Uvicorn/Daphne)
- Run `python manage.py migrate` during release
- Run `python manage.py collectstatic` and serve `/static/` via Nginx
- Set `ALLOWED_HOSTS` and `CSRF_TRUSTED_ORIGINS` for the domain
