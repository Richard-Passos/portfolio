const normProjects = (items = []) => (items.reduce(
  (obj, { thumbnail, ...data }) => ({
    data: [...obj.data, data],
    images: [...obj.images, thumbnail],
  }),
  { data: [], images: [] },
))

export default normProjects