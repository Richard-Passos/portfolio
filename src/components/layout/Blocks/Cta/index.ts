import { Cta } from './Root';
import { CtaText } from './Text';
import { CtaTitle } from './Title';

export * from './Root';
export * from './Text';
export * from './Title';

export default Object.assign(Cta, {
  Text: CtaText,
  Title: CtaTitle
});
