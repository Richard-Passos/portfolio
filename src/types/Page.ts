import DefaultPage from './DefaultPage';
import ErrorPage from './ErrorPage';
import LegalPage from './LegalPage';
import ProjectPage from './ProjectPage';

type Page = DefaultPage | ErrorPage | ProjectPage | LegalPage;

export default Page;
