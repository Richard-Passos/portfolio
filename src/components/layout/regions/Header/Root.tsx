import { ComponentProps } from 'react';

import { MagneticButton } from '@/components/input/Button/variants';
import { Theme } from '@/components/misc';
import { Logo } from '@/components/navigation';
import { LocaleMenu } from '@/components/navigation/Menu/variants';
import { NavTabs } from '@/components/navigation/Tabs/variants';
import { useI18nServer } from '@/hooks';
import { cn } from '@/utils';

type HeaderProps = ComponentProps<'header'>;

const Header = ({ className, ...props }: HeaderProps) => {
  const { locale, navItems } = useI18nServer('header');

  console.log(navItems);

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

        <div className='flex items-center gap-3 max-md:hidden'>
          <NavTabs items={navItems.map((item) => ({ url: item.url.value, label: item.label }))} />

          <LocaleMenu aria-label={locale.label.value} />
        </div>
      </header>
    </Theme>
  );
};

export { Header };
export type { HeaderProps };
