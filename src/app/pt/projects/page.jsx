import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { ProjectsView } from '@/views';
import lang from '../lang';

const ProjectsPage = async (props) => {
  const { data } = await pagesApi.getOne('projects', `?lang=${lang}`);

  return (
    <ProjectsView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async () => {
  const { metadata = {} } = (await pagesApi.getOne('projects', `?lang=${lang}`)).data || {};

  return {
    title: capitalize(metadata.title),
    description: metadata.description,
    openGraph: {
      title: capitalize(metadata.title),
      description: metadata.description,
    },
  };
};

export default ProjectsPage;
export { generateMetadata };
