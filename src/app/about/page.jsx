import { pagesApi } from '@/api';
import { AboutView } from '@/views';

const AboutPage = async () => {
  const {data} = await pagesApi.getOne('about');

  return <AboutView data={data} />;
};

const generateMetadata = async () => {
   const { metadata = {} } = (await pagesApi.getOne('about')).data || {};

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
    },
  };
};
export default AboutPage;
export { generateMetadata };
