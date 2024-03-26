import { cn } from '@/utils';

import Overlay from './Overlay';
import Content from './content';

const Footer = ({ className, ...props }) => {
  return (
    <footer
      className={cn(
        'relative light flex w-full max-w-bounds flex-col items-center overflow-y-clip',
        className,
      )}
      {...props}
    >
      <Overlay
        className='dark'
      />

      <Content />
    </footer>
  );
};

export default Footer;