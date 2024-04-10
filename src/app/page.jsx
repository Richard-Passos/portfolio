import { pagesApi } from '@/api';
import { HomeView } from '@/views';

const HomePage = async (props) => {
  const { data } = await pagesApi.getOne('home');

  return <HomeView data={data} {...props} />;
};

export default HomePage;
