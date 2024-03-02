import { getProject } from '@/api';
import { projects } from '@/constants/projects';
import { ProjectView } from '@/views';

const ProjectPage = ({ params: { id } }) => {
  const promises = getProject(id);

  return <ProjectView promises={promises} />;
};

const generateStaticParams = async () => {
  return projects.map((_, i) => ({ id: i.toString() }));
};

export default ProjectPage;
export { generateStaticParams };
