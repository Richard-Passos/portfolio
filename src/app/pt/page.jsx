import { pagesApi } from '@/api';
import { HomeView } from '@/views';
import lang from './lang';

const HomePage = async (props) => {
  const { data } = await pagesApi.getOne('home', `?lang=${lang}`);

  return (
    <HomeView
      data={data}
      {...props}
    />
  );
};

export default HomePage;
