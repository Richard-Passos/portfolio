import { MenuContent } from './Content';
import { MenuItem } from './Item';
import { MenuPositioner } from './Positioner';
import { Menu } from './Root';
import { MenuTrigger } from './Trigger';

export * from './Content';
export * from './Item';
export * from './Positioner';
export * from './Root';
export * from './Trigger';

export default Object.assign(Menu, {
  Content: MenuContent,
  Item: MenuItem,
  Positioner: MenuPositioner,
  Trigger: MenuTrigger
});
