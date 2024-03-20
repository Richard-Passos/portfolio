const projectsApiGetSelecteds = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects${pathname}`,
    {
      cache: 'no-store',
      ...opts,
    },
  );

  if (!res.ok) throw new Error('Failed to fetch data!');
  
  const resData = (await res.json())?.data || [];

  const data = resData.filter((data) => {
    return data.isSelected
  })

  return data;
};

export default projectsApiGetSelecteds;
