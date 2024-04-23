import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { ProjectsView } from '@/views';
import { unstable_setRequestLocale } from 'next-intl/server';

const ProjectsPage = async ({ params: { locale }, ...props }) => {
  unstable_setRequestLocale(locale);

  const { data } = await pagesApi.getOne('projects', `?locale=${locale}`);

  return (
    <ProjectsView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async ({ params: { locale } }) => {
  const { metadata = {} } = (await pagesApi.getOne('projects', `?locale=${locale}`)).data || {};

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
