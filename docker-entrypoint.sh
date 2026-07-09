#!/bin/sh
set -e

if [ -n "${DATABASE_URL:-}" ] && [ -f ./prisma/schema.prisma ]; then
  npx prisma migrate deploy 2>&1 || {
    echo "WARN: prisma migrate deploy failed. Check DATABASE_URL and that Postgres is reachable." >&2
  }
fi

exec "$@"
