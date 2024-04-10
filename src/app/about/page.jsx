import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { AboutView } from '@/views';

const AboutPage = async (props) => {
  const { data } = await pagesApi.getOne('about');

  return <AboutView data={data} {...props} />;
};

const generateMetadata = async () => {
  const { metadata = {} } = (await pagesApi.getOne('about')).data || {};

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
