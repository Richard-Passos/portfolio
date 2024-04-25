import { pagesApi } from '@/api';
import { ErrorProvider } from '@/contexts';
import { getLocale } from 'next-intl/server';

const ErrorBoundaryProvider = async ({ value, ...props }) => {
  const locale = await getLocale()

  const { data } = await pagesApi.getOne('error', `?locale=${locale}`);

  return (
    <ErrorProvider
      value={{ ...data, ...value }}
      {...props}
    />
  );
};

export default ErrorBoundaryProvider;
