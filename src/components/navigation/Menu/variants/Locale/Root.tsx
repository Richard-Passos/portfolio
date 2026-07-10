'use client';

import { Button, ButtonProps } from '@/components/input/Button';
import { Link } from '@/components/navigation/Link';
import Menu, { MenuProps } from '@/components/navigation/Menu';
import { CheckIcon } from '@/components/system/icons/Check';
import { GlobeIcon } from '@/components/system/icons/Globe';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

import data from './Root.data';

export type LocaleMenuProps = MergeProps<
  {
    wrapperProps?: MenuProps;
  },
  ButtonProps
>;

export const LocaleMenu = ({ wrapperProps, className, ...props }: LocaleMenuProps) => {
  return (
    <Menu {...wrapperProps}>
      <Menu.Trigger asChild>
        <Button
          aria-label={data.label}
          className={cn('min-w-32 justify-start gap-2 border-border capitalize', className)}
          {...props}
        >
          <GlobeIcon />

          {data.default.label}
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content className='z-50 flex min-w-32 flex-col gap-0.5 rounded border bg-body p-1 shadow focus-visible:outline-hidden'>
          {data.locales.map(({ key, label }) => {
            const isActive = key === data.default.key;

            return (
              <Menu.Item
                asChild
                value={key}
                key={key}
              >
                <Button
                  asChild
                  size='sm'
                  data-active={isActive ? true : undefined}
                  className={cn(
                    'justify-start border-transparent! capitalize transition-none focus-visible:outline-hidden data-highlighted:bg-(--hover)'
                  )}
                >
                  <Link
                    href='/'
                    lang={key}
                  >
                    {label}

                    {isActive && <CheckIcon className='ml-auto' />}
                  </Link>
                </Button>
              </Menu.Item>
            );
          })}
        </Menu.Content>
      </Menu.Positioner>
    </Menu>
  );
};
