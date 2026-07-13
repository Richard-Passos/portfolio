'use client';

import { Button, ButtonProps } from '@/components/input/Button';
import { Link } from '@/components/navigation/Link';
import Menu, { MenuProps } from '@/components/navigation/Menu';
import { CheckIcon } from '@/components/system/Icon/Check';
import { GlobeIcon } from '@/components/system/Icon/Globe';
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
          className={cn('min-w-32 justify-start border-border px-2.5 capitalize', className)}
          {...props}
        >
          <GlobeIcon className='size-6' />

          {data.default.label}
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content className='z-50 flex min-w-32 flex-col gap-0.5 rounded border bg-body p-1 shadow focus-visible:outline-hidden'>
          {data.locales.map(({ key, label }) => (
            <Menu.Item
              asChild
              key={key}
              value={key}
            >
              <Button
                asChild
                size='sm'
                className='justify-start capitalize transition-none'
              >
                <Link
                  href='/'
                  lang={key}
                >
                  {label}

                  {key === data.default.key && <CheckIcon className='ml-auto' />}
                </Link>
              </Button>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu>
  );
};
