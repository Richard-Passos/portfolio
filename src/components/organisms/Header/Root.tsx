import { ComponentProps } from 'react';

import { Bg } from '@/components/atoms';
import { LocaleSelect } from '@/components/molecules';
import Logo from '@/components/organisms/Logo';
import { defaultPages, locales } from '@/constants';
import { DefaultPage } from '@/types';
import { cn, entries } from '@/utils';
import { getLocale, headerApi, pagesApi } from '@/utils/actions';

import HeaderMenu from './Menu';
import HeaderNav, { HeaderNavProps } from './Nav';
import HeaderdTheme from './Theme';

type HeaderOrganismOwnProps = {};

type HeaderOrganismProps = HeaderOrganismOwnProps &
  Omit<ComponentProps<'header'>, keyof HeaderOrganismOwnProps>;

const HeaderOrganism = async ({ className, ...props }: HeaderOrganismProps) => {
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
          `bg-body max-w-bounds relative z-20 flex w-full flex-wrap items-center justify-center px-[6%] py-5 sm:px-[4%]`,
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

export default HeaderOrganism;
export type { HeaderOrganismProps };
