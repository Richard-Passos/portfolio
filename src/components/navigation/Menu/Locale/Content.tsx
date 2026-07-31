'use client';

import { MenuContent, MenuContentProps, MenuItem } from '@/components/navigation/Menu';
import { CheckIcon } from '@/components/system/Icon/Check';
import { MergeProps } from '@/types/MergeProps';

import { useLocale } from 'next-intlayer';
import { getHTMLTextDir, getLocaleName, getLocalizedUrl } from 'intlayer';
import { ButtonLink, ButtonLinkProps } from '@/components/navigation/Link/Button';
import { cn } from '@/utils/cn';

export type LocaleMenuContentProps = MergeProps<
  {
    wrapperProps?: MenuContentProps;
  },
  ButtonLinkProps,
  'href' | 'children' | 'dir' | 'hrefLang'
>;

export const LocaleMenuContent = ({
  wrapperProps,
  className,
  ...props
}: LocaleMenuContentProps) => {
  const { locale, pathWithoutLocale, availableLocales, setLocale } = useLocale();

  return (
    <MenuContent
      {...wrapperProps}
      className={cn('min-w-32', wrapperProps?.className)}
    >
      {availableLocales.map((localeItem) => (
        <MenuItem
          key={localeItem}
          value={localeItem}
        >
          <ButtonLink
            size='sm'
            color='muted'
            hrefLang={localeItem}
            dir={getHTMLTextDir(localeItem)}
            href={getLocalizedUrl(pathWithoutLocale, localeItem)}
            className={cn('justify-start pr-12 text-start capitalize transition-none', className)}
            {...props}
            onClick={(...args) => {
              setLocale(localeItem);

              props.onClick?.(...args);
            }}
          >
            {getLocaleName(localeItem)}

            {localeItem === locale && <CheckIcon className='absolute right-4' />}
          </ButtonLink>
        </MenuItem>
      ))}
    </MenuContent>
  );
};
