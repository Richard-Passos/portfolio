import { About } from './Root';
import { AboutAbout } from './About';
import { AboutBentoGrid } from './BentoGrid';
import { AboutBetter } from './Better';
import { AboutGallery } from './Gallery';
import { AboutHobbies } from './Hobbies';
import { AboutLocation } from './Location';
import { AboutLove } from './Love';
import { AboutTitle } from './Title';

export * from './Root';
export * from './About';
export * from './BentoGrid';
export * from './Better';
export * from './Gallery';
export * from './Hobbies';
export * from './Location';
export * from './Love';
export * from './Title';

export default Object.assign(About, {
  About: AboutAbout,
  BentoGrid: AboutBentoGrid,
  Better: AboutBetter,
  Gallery: AboutGallery,
  Hobbies: AboutHobbies,
  Location: AboutLocation,
  Love: AboutLove,
  Title: AboutTitle
});
