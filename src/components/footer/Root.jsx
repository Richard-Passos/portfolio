import { globalsApi } from '@/api';
import { cn, getOpstTheme } from '@/utils';

import Lines from '../lines';
import Content from './Content';
import Overlay from './Overlay';
import { getLocale } from 'next-intl/server';

const Footer = async ({ className, ...props }) => {
  const locale = await getLocale()

  const { theme, data = {} } = (await globalsApi.getOne('footer', `?locale=${locale}`)).data || {};

  const opstTheme = getOpstTheme(theme)

  return (
    <footer
      className={cn(
        'relative flex w-full max-w-bounds flex-col items-center justify-center overflow-y-clip pt-[--pt] [--pt:calc(theme(spacing.lg)*.5)]',
        `theme-${opstTheme}`,
        className,
      )}
      {...props}
    >
      <div className={cn('absolute top-0 h-[--pt] w-screen bg-main', `theme-${opstTheme}`)} >
        <Lines className='z-0' />
      </div>

      <Overlay className={cn('top-[--pt]', `theme-${opstTheme}`)}  />

      <Content
        theme={theme}
        data={data}
      />
    </footer>
  );
};

export default Footer;
