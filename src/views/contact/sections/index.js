import HomeViewContactSection from './Contact';
import HomeViewServicesSection from './Services';
import HomeViewHeroSection from './hero';

const HomeViewSections = {
  Contact: HomeViewContactSection,
  Services: HomeViewServicesSection,
  Hero: HomeViewHeroSection,
};

export default HomeViewSections;
export { HomeViewContactSection, HomeViewServicesSection, HomeViewHeroSection };
