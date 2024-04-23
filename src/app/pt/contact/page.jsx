import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { ContactView } from '@/views';
import lang from '../lang';

const ContactPage = async (props) => {
  const { data } = await pagesApi.getOne('contact', `?lang=${lang}`);

  return (
    <ContactView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async () => {
  const { metadata = {} } = (await pagesApi.getOne('contact', `?lang=${lang}`)).data || {};

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
