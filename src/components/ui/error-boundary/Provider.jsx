import { pagesApi } from '@/api';
import { ErrorProvider } from '@/contexts';

const ErrorBoundaryProvider = async ({ value, ...props }) => {
  const { data } = await pagesApi.getOne('error');

  return (
    <ErrorProvider
      value={{ ...data, ...value }}
      {...props}
    />
  );
};

export default ErrorBoundaryProvider;
