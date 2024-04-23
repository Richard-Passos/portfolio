import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { NotFoundView } from '@/views';
import lang from './lang';

const NotFoundPage = async (props) => {
  const { data } = await pagesApi.getOne('not-found', `?lang=${lang}`);

  return (
    <NotFoundView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async () => {
  const { metadata = {} } = (await pagesApi.getOne('not-found', `?lang=${lang}`)).data || {};

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
