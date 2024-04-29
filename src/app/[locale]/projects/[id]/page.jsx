import { unstable_setRequestLocale } from 'next-intl/server';

import { pagesApi, projectsApi } from '@/api';
import { ProjectView } from '@/views';

const ProjectPage = async ({ params: { locale, id } }) => {
  unstable_setRequestLocale(locale);

  const projectPromise = projectsApi.getOne(id, `?locale=${locale}`),
    dataPromise = pagesApi.getOne('project', `?locale=${locale}`);

  const [project = {}, { data = {} }] = await Promise.all([
    projectPromise,
    dataPromise,
  ]);

  return <ProjectView data={{ project, ...data }} />;
};

const generateMetadata = async ({ params: { id, locale } }) => {
  const { data = {} } = await projectsApi.getOne(id, `?locale=${locale}`);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
};

export default ProjectPage;
export { generateMetadata };
