import { AboutView } from '@/views';
import { pagesApi } from '@/api';


const AboutPage = async () => {
  const data = await pagesApi.getOne('about')

  return <AboutView data={data} />;
};

const generateMetadata = async () => {
  const { data = {} } = await pagesApi.getOne('about');

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
};
export default AboutPage;
export { generateMetadata };

