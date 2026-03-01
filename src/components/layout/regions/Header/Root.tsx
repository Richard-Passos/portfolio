import { ComponentProps } from 'react';

import { LocaleSelect } from '@/components/input/select/variants';
import { Theme } from '@/components/misc';
import { Logo } from '@/components/navigation';
import { useI18nServer } from '@/hooks';
import { cn } from '@/utils';

import { HeaderMenu } from './Menu';
import { HeaderNav } from './Nav';

type HeaderProps = ComponentProps<'header'>;

const Header = ({ className, ...props }: HeaderProps) => {
  const { locale, navItems } = useI18nServer('header');

  return (
    <Theme>
      <header
        className={cn(
          'max-w-bounds relative flex w-full flex-wrap items-center justify-center px-[6%] py-5 sm:px-[4%]',
          className
        )}
        {...props}
      >
        <Logo className='mr-auto' />

        <div className='flex items-center gap-2.5 max-md:hidden'>
          <HeaderNav items={navItems} />

          <LocaleSelect
            aria-label={locale.label}
            data={locales}
          />
        </div>

        <HeaderMenu />
      </header>
    </Theme>
  );
};

export { Header };
export type { HeaderProps };
