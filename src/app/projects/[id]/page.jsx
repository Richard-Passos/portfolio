import { projectsApi } from '@/api';
import { ProjectView } from '@/views';

const ProjectPage = ({ params: { id } }) => {
  const data = projectsApi.getOne(id),
   images = projectsApi.getOne(id);

  return <ProjectView promises={{data, images}} />;
};

const generateStaticParams = () => {
  return projectsApi.get().map(({slug}) => ({ id: slug }));
};

export default ProjectPage;
export { generateStaticParams };
