import { pagesApi, projectsApi } from '@/api';
import { ProjectView } from '@/views';
import { unstable_setRequestLocale } from 'next-intl/server';

const ProjectPage = async ({ params: { id, locale } }) => {
  unstable_setRequestLocale(locale);

  const project = await projectsApi.getOne(id, `?locale=${locale}`),
    data = (await pagesApi.getOne('project', `?locale=${locale}`)).data || {}
    
  return (
    <ProjectView
      data={{ project, ...data }}
    />
  );
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

const generateStaticParams = async ({ params: { locale } }) => {
  const { data = [] } = await projectsApi.getSelecteds(`?locale=${locale}`);

  return data.map(({ slug }) => ({ id: slug }));
};

export default ProjectPage;
export { generateMetadata, generateStaticParams };
