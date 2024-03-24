import Button from '../../button';
import { Menu, Portal } from '../../ui';
import Content from './Content';
import Trigger from './Trigger';

const HeaderMenu = (props) => {
  return (
    <Menu {...props}>
      <Menu.Trigger asChild>
        <Button
          className='rounded-sm sm:hidden'
          variants={{ size: 'sm', color: 'main' }}
        >
          Menu
        </Button>
      </Menu.Trigger>

      <Portal
        asChild
        className='!fixed right-sm top-sm z-[60]'
      >
        <Trigger />
      </Portal>

      <Portal>
        <Menu.Overlay />

        <Content />
      </Portal>
    </Menu>
  );
};

export default HeaderMenu;
