import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { NotFoundView } from '@/views';
import { unstable_setRequestLocale } from 'next-intl/server';
import { cookies } from 'next/headers';

const NotFoundPage = async (props) => {
  const cookie = cookies()

  const locale = cookie.get('NEXT_LOCALE').value

  unstable_setRequestLocale(locale);
    
  const { data } = await pagesApi.getOne('not-found', `?locale=${locale}`);

  return (
    <NotFoundView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async () => {
  const cookie = cookies()

  const locale = cookie.get('NEXT_LOCALE').value

  const { metadata = {} } = (await pagesApi.getOne('not-found', `?locale=${locale}`)).data || {};

  return {
    title: capitalize(metadata.title),
    description: metadata.description,
    openGraph: {
      title: capitalize(metadata.title),
      description: metadata.description,
    },
  };
};

export default NotFoundPage;
export { generateMetadata };
