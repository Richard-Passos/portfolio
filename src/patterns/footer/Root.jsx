import { Section } from '@/components';
import { cn } from '@/utils';

import Content from './Content';
import Overlay from './Overlay';

const Footer = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn(
        'relative mt-36 flex items-center justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <footer>
        <Overlay />

        <Content />
      </footer>
    </Section>
  );
};

export default Footer;
