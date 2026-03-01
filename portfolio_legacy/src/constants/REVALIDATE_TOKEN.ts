'use server';

if (process.env.REVALIDATE_TOKEN === undefined) {
  throw new Error('REVALIDATE_TOKEN is not defined in environment variables');
}

const REVALIDATE_TOKEN = process.env.REVALIDATE_TOKEN;

export { REVALIDATE_TOKEN };
