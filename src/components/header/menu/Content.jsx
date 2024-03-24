import { globalsApi } from '@/api';

import { MenuContent } from '../../ui/menu';
import Nav from './Nav';

const HeaderMenuContent = async (props) => {
  const { data = {} } = await globalsApi.getOne('header');

  return (
    <MenuContent {...props}>
      <Nav items={data.navItems} />
    </MenuContent>
  );
};

export default HeaderMenuContent;
