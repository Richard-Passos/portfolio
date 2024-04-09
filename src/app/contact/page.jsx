import { pagesApi } from '@/api';
import { capitalize } from '@/utils';

const ContactPage = async () => {
  const { data } = await pagesApi.getOne('contact');

  return <ContactView data={data} />;
};

const generateMetadata = async () => {
  const { metadata = {} } = (await pagesApi.getOne('contact')).data || {};

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
