'use client';

import { useContext } from 'react';

import { ErrorContext } from '@/contexts';

import Sections from './sections';

const ErrorView = ({ error, reset }) => {
  const { data } = useContext(ErrorContext);

  return (
    <>
      <Sections.Hero
        className='dark-layout'
        data={data}
        error={error}
        reset={reset}
      />
    </>
  );
};

export default ErrorView;
