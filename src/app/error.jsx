'use client';

import { useContext } from 'react';

import { ErrorContext } from '@/contexts';
import { ErrorView } from '@/views';

const ErrorPage = (props) => {
  const data = useContext(ErrorContext);

  return (
    <ErrorView
      data={data}
      {...props}
    />
  );
};

const metadata = {
  title: 'Error',
};

export default ErrorPage;
export { metadata };
