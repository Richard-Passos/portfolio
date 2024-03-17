const getProjects = async (params, init) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects${params ? '?' + params : ''}`,
    init,
  );

  const { data } = await res.json();

  return data;
};

export default getProjects;
