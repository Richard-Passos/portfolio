import { getPlaiceholder } from 'plaiceholder';

const BASE_URL = 'http://localhost:3000';

const getBase64 = async (url, options) => {
  const buffer = await _getBuffer(url);

  const { base64 } = await getPlaiceholder(buffer, options);

  return base64;
};

const _getBuffer = async (url) => {
  const res = await fetch(`${BASE_URL}/public${url}`);

  if (!res.ok)
    throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);

  const buffer = await res.arrayBuffer();

  return buffer;
};

export default getBase64;
