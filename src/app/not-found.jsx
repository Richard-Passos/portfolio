import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { NotFoundView } from '@/views';

const NotFoundPage = async (props) => {
  const { data } = await pagesApi.getOne('not-found');

  return (
    <NotFoundView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async () => {
  const { metadata = {} } = (await pagesApi.getOne('not-found')).data || {};

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
