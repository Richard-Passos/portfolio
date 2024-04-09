'use client';

import { ErrorContext } from '@/contexts';
import { ErrorView } from '@/views';
import { useContext } from 'react';

const ErrorPage = (props) => {
  const data = useContext(ErrorContext);

  return <ErrorView data={data} {...props} />;
};

const generateMetadata = async () => {
  const { metadata = {} } = (await pagesApi.getOne('error')).data || {};
  console.log('-  metadata   -', metadata)

  return {
    title: capitalize(metadata.title),
    description: metadata.description,
    openGraph: {
      title: capitalize(metadata.title),
      description: metadata.description,
    },
  };
};

export default ErrorPage;
export { generateMetadata };
