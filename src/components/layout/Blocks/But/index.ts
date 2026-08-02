import { But } from './Root';
import { ButText } from './Text';
import { ButTitle } from './Title';

export * from './Root';
export * from './Text';
export * from './Title';

export default Object.assign(But, {
  Text: ButText,
  Title: ButTitle
});
