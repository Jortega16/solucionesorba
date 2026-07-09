import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export async function withDb<T>(operation: () => Promise<T>, fallback: T): Promise<T> {
  if (!process.env.DATABASE_URL) return fallback;

  try {
    return await operation();
  } catch (error) {
    console.error('CMS database operation failed:', error);
    return fallback;
  }
}

export async function runDb<T>(operation: () => Promise<T>): Promise<T> {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL no está configurada en el servidor.');
  }

  try {
    return await operation();
  } catch (error) {
    console.error('CMS database operation failed:', error);
    throw new Error(
      'No se pudo usar la base de datos. Verifica DATABASE_URL, que Postgres esté activo y que las migraciones se hayan aplicado.'
    );
  }
}
