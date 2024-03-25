import { globalsApi } from '@/api';

import MenuUiContent from '../ui/menu/Content';
import Nav from './Nav';

const MenuContent = async (props) => {
  const { data = {} } = await globalsApi.getOne('header');

  return (
    <MenuUiContent
      data-lenis-prevent
      {...props}
    >
      <Nav items={data.navItems} />
    </MenuUiContent>
  );
};

export default MenuContent;
