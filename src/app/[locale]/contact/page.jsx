import { unstable_setRequestLocale } from 'next-intl/server';

import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { ContactView } from '@/views';

const ContactPage = async ({ params: { locale }, ...props }) => {
  unstable_setRequestLocale(locale);

  const { data } = await pagesApi.getOne('contact', `?locale=${locale}`);

  return (
    <ContactView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async ({ params: { locale } }) => {
  const { metadata = {} } =
    (await pagesApi.getOne('contact', `?locale=${locale}`)).data || {};

  return {
    title: capitalize(metadata.title),
    description: metadata.description,
    openGraph: {
      title: capitalize(metadata.title),
      description: metadata.description,
    },
  };
};

export default ContactPage;
export { generateMetadata };
