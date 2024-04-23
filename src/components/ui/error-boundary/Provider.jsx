import { pagesApi } from '@/api';
import { ErrorProvider } from '@/contexts';

const ErrorBoundaryProvider = async ({ locale, value, ...props }) => {
  const { data } = await pagesApi.getOne('error', `?locale=${locale}`);

  return (
    <ErrorProvider
      value={{ ...data, ...value }}
      {...props}
    />
  );
};

export default ErrorBoundaryProvider;
