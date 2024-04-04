import Button from '../button';
import { Menu as MenuUi, Portal } from '../ui';
import Content from './Content';
import Overlay from './Overlay';
import Trigger from './Trigger';
import State from './State';

const Menu = (props) => {
  return (
    <MenuUi {...props}>
      <MenuUi.Trigger asChild>
        <Button
          className='rounded-sm sm:hidden'
          variants={{ size: 'sm', color: 'main' }}
        >
          Menu
        </Button>
      </MenuUi.Trigger>

        <State>
      <MenuUi.Portal>
        <Content />

        <Overlay />
      </MenuUi.Portal>
          </State>

        <State>
      <Portal
        className='fixed pointer-events-none right-sm top-sm z-[60]'
      >
        <Trigger />
      </Portal>
      </State>
    </MenuUi>
  );
};

export default Menu;
