import { type PropsWithChildren } from 'react';

import { AppProvider } from '@/providers';
import '@/styles/globals.css';

const RootLayout = ({ children }: PropsWithChildren) => {
  return <AppProvider>{children}</AppProvider>;
};

export default RootLayout;
