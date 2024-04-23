import { pagesApi } from '@/api';
import { ErrorProvider } from '@/contexts';

const ErrorBoundaryProvider = async ({ lang, value, ...props }) => {
  const { data } = await pagesApi.getOne('error', `?lang=${lang}`);

  return (
    <ErrorProvider
      value={{ ...data, ...value }}
      {...props}
    />
  );
};

export default ErrorBoundaryProvider;
