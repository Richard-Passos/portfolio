'use client';

import { ErrorContext } from '@/contexts';
import { ErrorView } from '@/views';
import { useContext } from 'react';

const ErrorPage = (props) => {
  const data = useContext(ErrorContext);

  return <ErrorView data={data} {...props} />;
};

const metadata = {
 title: 'Error' 
}

export default ErrorPage;
export { metadata };
