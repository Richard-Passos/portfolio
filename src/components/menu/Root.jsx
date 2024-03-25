import Button from '../button';
import { Menu as MenuUi, Portal } from '../ui';
import Content from './Content';
import Overlay from './Overlay';
import Trigger from './Trigger';

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


      <MenuUi.Portal>
        <Content />

        <Overlay/>
      </MenuUi.Portal>

      <Portal
        asChild
        className='!fixed right-sm top-sm z-50'
      >
        <Trigger />
      </Portal>
    </MenuUi>
  );
};

export default Menu;
