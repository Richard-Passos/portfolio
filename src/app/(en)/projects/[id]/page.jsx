import { pagesApi, projectsApi } from '@/api';
import { ProjectView } from '@/views';
import lang from '../../lang';

const ProjectPage = async ({ params: { id } }) => {
  const project = await projectsApi.getOne(id, `?lang=${lang}`),
    data = (await pagesApi.getOne('project', `?lang=${lang}`)).data || {}
    
  return (
    <ProjectView
      data={{ project, ...data }}
    />
  );
};

const generateMetadata = async ({ params: { id } }) => {
  const { data = {} } = await projectsApi.getOne(id, `?lang=${lang}`);

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
  const { data = [] } = await projectsApi.getSelecteds();

  return data.map(({ slug }) => ({ id: slug }));
};

export default ProjectPage;
export { generateMetadata, generateStaticParams };
