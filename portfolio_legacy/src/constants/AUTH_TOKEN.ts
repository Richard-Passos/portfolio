'use server';

if (process.env.AUTH_TOKEN === undefined) {
  throw new Error('AUTH_TOKEN is not defined in environment variables');
}

const AUTH_TOKEN = process.env.AUTH_TOKEN;

export { AUTH_TOKEN };
