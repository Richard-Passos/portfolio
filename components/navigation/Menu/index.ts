import { MenuContent } from './Content';
import { MenuItem } from './Item';
import { MenuPositioner } from './Positioner';
import { Menu as MenuRoot } from './Root';
import { MenuTrigger } from './Trigger';

export * from './Content';
export * from './Item';
export * from './Positioner';
export { type MenuProps } from './Root';
export * from './Trigger';

export const Menu = Object.assign(MenuRoot, {
  Content: MenuContent,
  Item: MenuItem,
  Positioner: MenuPositioner,
  Trigger: MenuTrigger
});
