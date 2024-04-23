import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { WorkView } from '@/views';
import { unstable_setRequestLocale } from 'next-intl/server';

const WorkPage = async ({ params: { locale }, ...props }) => {
  unstable_setRequestLocale(locale);

  const { data } = await pagesApi.getOne('work', `?locale=${locale}`);

  return (
    <WorkView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async ({ params: { locale } }) => {
  const { metadata = {} } = (await pagesApi.getOne('work', `?locale=${locale}`)).data || {};

  return {
    title: capitalize(metadata.title),
    description: metadata.description,
    openGraph: {
      title: capitalize(metadata.title),
      description: metadata.description,
    },
  };
};

export default WorkPage;
export { generateMetadata };
