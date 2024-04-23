'use client';

import { useContext } from 'react';

import { ErrorContext } from '@/contexts';
import { ErrorView } from '@/views';

const ErrorPage = (props) => {
  const data = useContext(ErrorContext);
  console.log('-  data   -', data)

  return (
    <ErrorView
      data={data}
      {...props}
    />
  );
};

export default ErrorPage;