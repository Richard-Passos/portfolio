import { pagesApi, projectsApi } from '@/api';
import { ProjectView } from '@/views';

const ProjectPage = async ({ params: { id } }) => {
  const project = await projectsApi.getOne(id),
  data = (await pagesApi.getOne('project')).data || {},
  images = projectsApi.getOne(id)
  
  return <ProjectView data={{ project, ...data }} promise={images} />;
};

const generateMetadata = async ({ params: { id } }) => {
  const { data = {} } = await projectsApi.getOne(id);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
};

const generateStaticParams = async () => {
  const { data = [] } = await projectsApi.getSelecteds()

  return data.map(({ slug }) => ({ id: slug }));
};

export default ProjectPage;
export { generateMetadata, generateStaticParams };
