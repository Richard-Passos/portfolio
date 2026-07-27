'use client';

import { Button, ButtonProps } from '@/components/input/Button';
import { MenuTrigger } from '@/components/navigation/Menu';
import { GlobeIcon } from '@/components/system/Icon/Globe';
import { cn } from '@/utils/cn';
import { getLocaleName } from 'intlayer';
import { useLocale } from 'next-intlayer';
import { useIntlayer } from 'next-intlayer/server';

export type LocaleMenuTriggerProps = Omit<ButtonProps, 'children'>;

export const LocaleMenuTrigger = ({ className, ...props }: LocaleMenuTriggerProps) => {
  const { locale } = useLocale();
  const t = useIntlayer('locale-menu');

  return (
    <MenuTrigger>
      <Button
        aria-label={t.label.value}
        className={cn(
          'min-w-32 justify-start border-border px-2.5 text-start text-sm capitalize',
          className
        )}
        {...props}
      >
        <GlobeIcon className='size-[1.5em]' />

        {getLocaleName(locale)}
      </Button>
    </MenuTrigger>
  );
};
