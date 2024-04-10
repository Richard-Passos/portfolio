import HomeViewAboutSection from './About';
import HomeViewButSection from './But';
import HomeViewCtaSection from './Cta';
import HomeViewHeroSection from './Hero';
import HomeViewWorkSection from './Work';

const HomeViewSections = {
  About: HomeViewAboutSection,
  But: HomeViewButSection,
  Cta: HomeViewCtaSection,
  Hero: HomeViewHeroSection,
  Work: HomeViewWorkSection,
};

export default HomeViewSections;
export { 
  HomeViewAboutSection, 
  HomeViewButSection, 
  HomeViewCtaSection, 
  HomeViewHeroSection, 
  HomeViewWorkSection 
};
