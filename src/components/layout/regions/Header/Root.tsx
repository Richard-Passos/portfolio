import { ComponentProps } from 'react';

import { Theme } from '@/components/misc';
import { Logo } from '@/components/navigation';
import { LocaleMenu } from '@/components/navigation/Menu/variants';
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
          'relative flex w-full max-w-bounds flex-wrap items-center justify-center px-[6%] py-5 sm:px-[4%]',
          className
        )}
        {...props}
      >
        <Logo className='mr-auto' />

        <div className='flex items-center gap-2.5 max-md:hidden'>
          <LocaleMenu aria-label={locale.label.value} />
        </div>
      </header>
    </Theme>
  );
};

export { Header };
export type { HeaderProps };
