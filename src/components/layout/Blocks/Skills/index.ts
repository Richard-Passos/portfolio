import { Skills } from './Root';
import { SkillsItems } from './Items';
import { SkillsTitle } from './Title';

export * from './Root';
export * from './Items';
export * from './Title';

export default Object.assign(Skills, {
  Items: SkillsItems,
  Title: SkillsTitle
});
