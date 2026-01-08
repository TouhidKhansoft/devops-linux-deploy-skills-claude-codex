# Prisma and Supabase Notes

Prisma:
- Ensure prisma CLI is available (npx prisma)
- Run migrations: npx prisma migrate deploy
- Generate client: npx prisma generate

Supabase:
- Use managed Postgres connection string
- Ensure pgssl settings match Supabase requirements
- Keep keys in env vars; never commit
