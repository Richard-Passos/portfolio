import addQueryLocale from './addQueryLocale';

const getData = async (url, opts) => {
  const [ pathname = '', query = '' ] = url?.split('?') || []

  url = `${pathname}${await addQueryLocale('?' + query)}`
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api${url}`,
    {
      cache: 'no-store',
      ...opts,
    },
  );

  if (!res.ok) throw new Error('Failed to fetch data!');

  const data = await res.json();

  return data || {}
}

export default getData