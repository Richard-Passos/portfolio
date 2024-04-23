import { pagesApi } from '@/api';
import { HomeView } from '@/views';
import { unstable_setRequestLocale } from 'next-intl/server';

const HomePage = async ({ params: { locale }, ...props }) => {
  unstable_setRequestLocale(locale);

  const { data } = await pagesApi.getOne('home', `?locale=${locale}`);

  return (
    <HomeView
      data={data}
      {...props}
    />
  );
};

export default HomePage;
