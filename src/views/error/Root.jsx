'use client';

import { useContext } from 'react';

import { ErrorContext } from '@/contexts';

import Sections from './sections';

const ErrorView = ({ error, reset }) => {
  const { data } = useContext(ErrorContext);

  return (
    <main className='dark-layout dark flex w-full max-w-bounds flex-col items-center'>
      <Sections.Hero
        data={data}
        error={error}
        reset={reset}
      />
    </main>
  );
};

export default ErrorView;
