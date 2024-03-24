import { cn, getOpstTheme } from '@/utils';

import Bg from '../bg';
import Lines from '../lines';
import Overlay from './Overlay';
import Content from './content';

const FOOTER_CONTENT_THEME = 'light';

const Footer = ({ className, ...props }) => {
  return (
    <footer
      className={cn(
        'relative flex w-full max-w-bounds flex-col items-center overflow-y-clip pt-[--spacing-t] [--spacing-t:theme(spacing.24)]',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'absolute top-0 z-20 h-[--spacing-t] w-screen overflow-hidden bg-main',
          getOpstTheme(FOOTER_CONTENT_THEME),
        )}
      >
        <Lines className='absolute' />
      </div>

      <Overlay
        className={cn('top-[--spacing-t]', getOpstTheme(FOOTER_CONTENT_THEME))}
      />

      <Bg className={cn('top-[--spacing-t] -z-10', FOOTER_CONTENT_THEME)} />

      <Content />
    </footer>
  );
};

export default Footer;
export { FOOTER_CONTENT_THEME };
