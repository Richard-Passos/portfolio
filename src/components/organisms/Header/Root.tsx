import { ComponentProps } from 'react';

import { LocaleSelect } from '@/components/molecules';
import Logo from '@/components/organisms/Logo';
import { defaultPages, locales } from '@/constants';
import { cn } from '@/utils';
import { getLocale, headerApi, pagesApi } from '@/utils/actions';

import HeaderMenu from './Menu';
import HeaderNav, { HeaderNavProps } from './Nav';
import HeaderdTheme from './Nav copy';

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

  const header = headerRes.data;

  const navItem: HeaderNavProps['items'] = pagesRes.ok
    ? pagesRes.data.map((p) => ({
        href: `/${p.slug === defaultPages.home ? '' : p.slug}`,
        label: `${p.label}`
      }))
    : [];

  return (
    <HeaderdTheme>
      <header
        className={cn(
          `max-w-bounds z-10 flex w-full flex-wrap items-center justify-between px-[6%] py-5 sm:px-[4%]`,
          className
        )}
        {...props}
      >
        <Logo />

        <div className='flex items-center gap-2.5 max-md:hidden'>
          <HeaderNav items={navItem} />

          <LocaleSelect
            aria-label={header.locale.label}
            data={locales}
          />
        </div>

        <HeaderMenu />
      </header>
    </HeaderdTheme>
  );
};

export default HeaderOrganism;
export type { HeaderOrganismProps };
