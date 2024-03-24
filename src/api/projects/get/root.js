const projectsApiGet = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects${pathname}`,
    {
      cache: 'no-store',
      ...opts,
    },
  );

  if (!res.ok) throw new Error('Failed to fetch data!');

  const data = await res.json();

  return data;
};

export default projectsApiGet;
