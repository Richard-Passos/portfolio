'use server';

if (process.env.URL === undefined) {
  throw new Error('URL is not defined in environment variables');
}

export const BASE_URL = process.env.URL;
