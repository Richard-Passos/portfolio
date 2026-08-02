import { PrimaryHero } from './Root';
import { PrimaryHeroCards } from './Cards';
import { PrimaryHeroCenter } from './Center';
import { PrimaryHeroLeft } from './Left';
import { PrimaryHeroRight } from './Right';
import { PrimaryHeroTitle } from './Title';

export * from './Root';
export * from './Cards';
export * from './Center';
export * from './Left';
export * from './Right';
export * from './Title';

export default Object.assign(PrimaryHero, {
  Cards: PrimaryHeroCards,
  Center: PrimaryHeroCenter,
  Left: PrimaryHeroLeft,
  Right: PrimaryHeroRight,
  Title: PrimaryHeroTitle
});
