import { projectsApi } from '@/api';
import { ProjectView } from '@/views';

const ProjectPage = ({ params: { id } }) => {
  const data = projectsApi.getOne(id),
   images = projectsApi.getOne(id);

  return <ProjectView promises={{data, images}} />;
};

const generateMetadata = async ({ params }) => {
  const { id } = params;

  const {data = {}} = await projectsApi.getOne(id)

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
  const {data = []} = (await projectsApi.get())

  return data.map(({slug}) => ({ id: slug }));
};

export default ProjectPage;
export { generateMetadata, generateStaticParams };
