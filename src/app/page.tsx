import { HomeTemplate } from '@/components/templates/Home';

import data from './page.data';

export type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return <HomeTemplate data={data} />;
};

export default HomePage;
