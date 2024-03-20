import ErrorBoundaryProvider from './Provider';
import ErrorBoundaryRoot from './Root';

const ErrorBoundary = ErrorBoundaryRoot;

ErrorBoundary.Provider = ErrorBoundaryProvider;

export default ErrorBoundary;
export { ErrorBoundaryRoot as ErrorBoundary, ErrorBoundaryProvider };
