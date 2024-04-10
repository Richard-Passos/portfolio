import HomeViewAboutSection from './About';
import HomeViewCtaSection from './Cta';
import HomeViewFirstSection from './First';
import HomeViewHeroSection from './Hero';
import HomeViewWorkSection from './Work';

const HomeViewSections = {
  About: HomeViewAboutSection,
  Cta: HomeViewCtaSection,
  First: HomeViewFirstSection,
  Hero: HomeViewHeroSection,
  Work: HomeViewWorkSection,
};

export default HomeViewSections;
export { 
  HomeViewAboutSection, 
  HomeViewCtaSection, 
  HomeViewFirstSection, 
  HomeViewHeroSection, 
  HomeViewWorkSection 
};
