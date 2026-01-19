import DeepPartial from './DeepPartial';
import ErrorPage from './ErrorPage';
import LegalPage from './LegalPage';
import Page from './Page';
import SingleProjectPage from './SingleProjectPage';

type PartialSingleProjectPage = {
  slug: string;
} & DeepPartial<Omit<SingleProjectPage, 'slug'>>;

type Pages = Page | ErrorPage | PartialSingleProjectPage | LegalPage;

export default Pages;
