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
        'relative mx-auto flex max-w-bounds flex-col items-center overflow-y-clip pt-24 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      {...props}
    >
      <footer>
        <div className='absolute top-0 z-20 h-24 w-full overflow-hidden bg-main'>
          <Lines className='absolute' />
        </div>

        <Overlay className='top-24' />

        <span
          className={cn(
            'absolute bottom-0 top-24 -z-10 w-screen bg-main transition-bg',
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
