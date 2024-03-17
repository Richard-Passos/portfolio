const getProject = (id, init) => {
  const data = _fetch(`/${id}`, init),
    images = _fetch(`/${id}/images`, init);

  return { data, images };
};

const _fetch = async (pathname, init) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects${pathname}`, {
    cache: 'no-store',
  });

  const { data } = await res.json();

  return data;
};

export default getProject;
