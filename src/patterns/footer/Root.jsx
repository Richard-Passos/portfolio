import { Bg, Section } from '@/components';
import { cn } from '@/utils';

import Overlay from './Overlay';
import Content from './content';

const Footer = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn(
        'relative flex h-auto min-h-0 items-center justify-center overflow-hidden pt-36',
        className,
      )}
      {...props}
    >
      <footer>
        <span className='absolute top-0 z-10 h-36 w-full bg-main' />

        <Overlay className='top-36' />

        <Bg className='light' />

        <Content className='light' />
      </footer>
    </Section>
  );
};

export default Footer;
