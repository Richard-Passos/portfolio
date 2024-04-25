import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { NotFoundView } from '@/views';
import { useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

const NotFoundPage = async (props) => {
  const locale = useLocale()

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
  const locale = useLocale()

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
