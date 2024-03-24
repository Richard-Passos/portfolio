const globalsApiGetOne = async (id = '', pathname = '', opts = {}) => {
  /* const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/globals/${id}${pathname}`,
    {
      cache: 'no-store',
      ...opts,
    },
  );

  if (!res.ok) throw new Error('Failed to fetch data!');

  const data = await res.json(); */

  return {};
};

export default globalsApiGetOne;
