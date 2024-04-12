import { cn } from '@/utils';

import Overlay from './Overlay';
import Content from './content';
import Lines from '../lines';

const Footer = ({ className, ...props }) => {
  return (
    <footer
      className={cn(
        'relative flex w-full max-w-bounds flex-col items-center overflow-y-clip pt-lg',
        className,
      )}
      {...props}
    >
      <div className='dark absolute h-lg top-0 w-screen bg-main'>
      <Lines className='z-0'/>
      </div>

      <Overlay theme='dark' className='top-lg' />

      <Content theme='light' />
    </footer>
  );
};

export default Footer;
