'use client';

import { Provider } from 'react-redux';

import { store } from '@/redux';

const GlobalStateProvider = (props) => {
  return (
    <Provider
      store={store}
      {...props}
    />
  );
};

export default GlobalStateProvider;
