import { unstable_setRequestLocale } from 'next-intl/server';

import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { AboutView } from '@/views';

const AboutPage = async ({ params: { locale }, ...props }) => {
  unstable_setRequestLocale(locale);

  const { data } = await pagesApi.getOne('about', `?locale=${locale}`);

  return (
    <AboutView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async ({ params: { locale } }) => {
  const { metadata = {} } =
    (await pagesApi.getOne('about', `?locale=${locale}`)).data || {};

  return {
    title: capitalize(metadata.title),
    description: metadata.description,
    openGraph: {
      title: capitalize(metadata.title),
      description: metadata.description,
    },
  };
};

export default AboutPage;
export { generateMetadata };
