import 'dotenv/config';

export * from './app.config';
export * from './validate.config';

export const DATABASE_URL = process.env.DATABASE_URL ?? 'file:./dev.db';
export const JWT_ACCESS_SECRET =
  process.env.JWT_ACCESS_SECRET ?? 'change-this-secret-before-production';
