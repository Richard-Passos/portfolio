import Nav from './Nav';
import { globalsApi } from '@/api';
import { MenuContent } from '../../ui/menu';

const HeaderMenuContent = async (props) => {
  const header = (await globalsApi.getOne('header')) || {}

  return (
    <MenuContent {...props}>
      <Nav items={header.navItems}/>
    </MenuContent>
  );
};

export default HeaderMenuContent;
