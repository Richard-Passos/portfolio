'use client';

import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/redux';

const Provider = (props) => {
  return (
    <ReduxProvider
      store={store}
      {...props}
    />
  );
};

export default Provider;
