import { cn } from '@/utils';

import Lines from '../lines';
import Overlay from './Overlay';
import Content from './content';

const Footer = ({ className, ...props }) => {
  return (
    <footer
      className={cn(
        'relative flex w-full max-w-bounds flex-col items-center overflow-y-clip pt-[--pt] [--pt:calc(theme(spacing.lg)*.5)]',
        className,
      )}
      {...props}
    >
      <div className='dark absolute top-0 h-[--pt] w-screen bg-main'>
        <Lines className='z-0' />
      </div>

      <Overlay
        theme='dark'
        className='top-[--pt]'
      />

      <Content theme='light' />
    </footer>
  );
};

export default Footer;
