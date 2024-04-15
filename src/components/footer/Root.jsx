import { globalsApi } from '@/api';
import { cn, getOpstTheme } from '@/utils';

import Lines from '../lines';
import Content from './Content';
import Overlay from './Overlay';

const Footer = async ({ className, ...props }) => {
  const { theme, data = {} } = (await globalsApi.getOne('footer')).data || {};

  return (
    <footer
      className={cn(
        'relative flex w-full max-w-bounds flex-col items-center justify-center overflow-y-clip pt-[--pt] [--pt:calc(theme(spacing.lg)*.5)]',
        `theme-${getOpstTheme(theme)}`,
        className,
      )}
      {...props}
    >
      <div className='absolute top-0 h-[--pt] w-screen bg-main'>
        <Lines className='z-0' />
      </div>

      <Overlay className='top-[--pt]' />

      <Content
        theme={theme}
        data={data}
      />
    </footer>
  );
};

export default Footer;
