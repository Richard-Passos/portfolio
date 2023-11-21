import { cn } from '@/utils';

import Lines from '../lines';
import Section from '../section';
import { CursorHover } from '../ui/cursor';
import Overlay from './Overlay';
import Content from './content';

const CONTENT_THEME = 'light';

const Footer = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn(
        'relative mx-auto max-w-bounds overflow-hidden pt-36',
        className,
      )}
      {...props}
    >
      <footer>
        <div className='absolute top-0 z-20 h-36 w-full overflow-hidden bg-main'>
          <Lines className='absolute' />
        </div>

        <Overlay className='top-36' />

        <span
          className={cn(
            'absolute inset-0 top-36 -z-10 w-auto bg-main',
            CONTENT_THEME,
          )}
        />

        <CursorHover variant={{ theme: CONTENT_THEME }}>
          <Content className={CONTENT_THEME} />
        </CursorHover>
      </footer>
    </Section>
  );
};

export default Footer;
export { CONTENT_THEME };
