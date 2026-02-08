import careerApi from './career';
import cookiesConsentApi from './cookiesConsent';
import footerApi from './footer';
import getLocale from './getLocale';
import headerApi from './header';
import pagesApi from './pages';
import personalApi from './personal';
import projectsApi from './projects';
import sendEmail from './sendEmail';
import servicesApi from './services';
import skillsApi from './skills';
import statisticsApi from './statistics';
import valuesApi from './values';

const actions = {
  careerApi,
  cookiesConsentApi,
  footerApi,
  headerApi,
  pagesApi,
  personalApi,
  projectsApi,
  servicesApi,
  skillsApi,
  statisticsApi,
  valuesApi,
  getLocale,
  sendEmail
};

export default actions;
export {
  careerApi,
  cookiesConsentApi,
  footerApi,
  headerApi,
  pagesApi,
  personalApi,
  projectsApi,
  servicesApi,
  skillsApi,
  statisticsApi,
  valuesApi,
  getLocale,
  sendEmail
};
