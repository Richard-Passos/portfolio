import { pagesApi } from '@/api';
import { capitalize } from '@/utils';
import { WorkView } from '@/views';
import lang from '../lang';

const WorkPage = async (props) => {
  const { data } = await pagesApi.getOne('work', `?lang=${lang}`);

  return (
    <WorkView
      data={data}
      {...props}
    />
  );
};

const generateMetadata = async () => {
  const { metadata = {} } = (await pagesApi.getOne('work', `?lang=${lang}`)).data || {};

  return {
    title: capitalize(metadata.title),
    description: metadata.description,
    openGraph: {
      title: capitalize(metadata.title),
      description: metadata.description,
    },
  };
};

export default WorkPage;
export { generateMetadata };
