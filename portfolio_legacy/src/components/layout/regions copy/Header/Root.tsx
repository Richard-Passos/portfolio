import { ComponentProps } from 'react';

import { Bg } from '@/components/atoms';
import { LocaleSelect } from '@/components/molecules';
import Logo from '@/components/navigation/Logo';
import { defaultPages, locales } from '@/constants';
import { DefaultPage } from '@/types';
import { MergeProps } from '@/types';
import { cn, entries } from '@/utils';
import { getLocale, headerApi, pagesApi } from '@/utils/actions';

import HeaderMenu from './Menu';
import HeaderNav, { HeaderNavProps } from './Nav';
import HeaderdTheme from './Theme';

type HeaderOwnProps = {};

type HeaderProps = MergeProps<HeaderOwnProps, ComponentProps<'header'>>;

const Header = async ({ className, ...props }: HeaderProps) => {
  const locale = await getLocale();

  const [headerRes, pagesRes] = await Promise.all([
    headerApi.get({ locale }),
    pagesApi.get({ locale, isSelected: true })
  ]);

  if (!headerRes.ok) return null;

  const header = headerRes.data,
    pages = pagesRes.ok
      ? (pagesRes.data as Record<string, DefaultPage>)
      : undefined;

  const navItem: HeaderNavProps['items'] = entries(pages).map(([key, p]) => ({
    href: key === defaultPages.home ? '/' : `/${key}`,
    label: p.label
  }));

  return (
    <HeaderdTheme>
      <header
        className={cn(
          'max-w-bounds relative flex w-full flex-wrap items-center justify-center px-[6%] py-5 sm:px-[4%]',
          className
        )}
        {...props}
      >
        <Logo className='mr-auto' />

        <div className='flex items-center gap-2.5 max-md:hidden'>
          <HeaderNav items={navItem} />

          <LocaleSelect
            aria-label={header.locale.label}
            data={locales}
          />
        </div>

        <HeaderMenu />

        <Bg />
      </header>
    </HeaderdTheme>
  );
};

export { Header };
export type { HeaderProps };
