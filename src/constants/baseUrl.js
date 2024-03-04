const baseUrl =
  process.env.NEXT_PUBLIC_NODE_ENV.toLowerCase() === 'development'
    ? 'http://127.0.0.1:3000'
    : 'https://richard-passos.vercel.app';

export default baseUrl;
