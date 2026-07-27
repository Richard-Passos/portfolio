import { LocaleMenu } from './Root';
import { LocaleMenuContent } from './Content';
import { LocaleMenuTrigger } from './Trigger';

export * from './Root';
export * from './Content';
export * from './Trigger';

export default Object.assign(LocaleMenu, {
  Content: LocaleMenuContent,
  Trigger: LocaleMenuTrigger
});
