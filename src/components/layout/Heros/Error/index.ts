import { ErrorHero } from './Root';
import { ErrorHeroAction } from './Action';
import { ErrorHeroContent } from './Content';
import { ErrorHeroStatus } from './Status';
import { ErrorHeroText } from './Text';
import { ErrorHeroTitle } from './Title';

export * from './Root';
export * from './Action';
export * from './Content';
export * from './Status';
export * from './Text';
export * from './Title';

export default Object.assign(ErrorHero, {
  Action: ErrorHeroAction,
  Content: ErrorHeroContent,
  Status: ErrorHeroStatus,
  Text: ErrorHeroText,
  Title: ErrorHeroTitle
});
