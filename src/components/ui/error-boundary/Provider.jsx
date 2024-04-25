import { pagesApi } from '@/api';
import { ErrorProvider } from '@/contexts';
import { useLocale } from 'next-intl';

const ErrorBoundaryProvider = async ({ value, ...props }) => {
  const locale = useLocale()

  const { data } = await pagesApi.getOne('error', `?locale=${locale}`);

  return (
    <ErrorProvider
      value={{ ...data, ...value }}
      {...props}
    />
  );
};

export default ErrorBoundaryProvider;
