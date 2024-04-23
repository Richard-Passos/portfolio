import Button from '../button';
import { Menu as MenuUi, Portal } from '../ui';
import Content from './Content';
import Overlay from './Overlay';
import State from './State';
import Trigger from './Trigger';

const Menu = ({lang, ...props}) => {
  return (
    <MenuUi {...props}>
      <MenuUi.Trigger asChild>
        <Button
          className='rounded-sm transition-none sm:hidden'
          variants={{ size: 'sm', color: 'main' }}
        >
          Menu
        </Button>
      </MenuUi.Trigger>

      <State>
        <MenuUi.Portal>
          <Content lang={lang} />

          <Overlay />
        </MenuUi.Portal>
      </State>

      <State>
        <Portal className='pointer-events-none fixed right-sm top-sm z-[60]'>
          <Trigger />
        </Portal>
      </State>
    </MenuUi>
  );
};

export default Menu;
