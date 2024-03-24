'use client'

import { ErrorView } from '@/views';

const ErrorPage = (props) => {
  return <ErrorView {...props} />;
};

const metadata = {
  title: 'Error',
};

export default ErrorPage;
export {metadata}
