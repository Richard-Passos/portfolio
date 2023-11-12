import { Portal, Sheet } from '../ui';
import Content from './Content';
import Trigger from './Trigger';

const Menu = (props) => {
  return (
    <Sheet {...props}>
      <Portal
        asChild
        className='fixed right-6 top-6 z-[60]'
      >
        <Trigger />
      </Portal>

      <Sheet.Portal>
        <Sheet.Overlay />

        <Content />
      </Sheet.Portal>
    </Sheet>
  );
};

export default Menu;
