'use client';

import { Button } from '@/components/input/Button';
import { LogoIcon, LogoIconProps } from '@/components/system/Icon/Logo';
import { MergeProps } from '@/types/MergeProps';

import { Link, LinkProps } from '../Link';
import { useLenis } from 'lenis/react';

export type LogoProps = MergeProps<
  {
    variant?: LogoIconProps['variant'];
  },
  LinkProps,
  'href'
>;

export const Logo = ({ variant = 'primary', ...props }: LogoProps) => {
  const lenis = useLenis();

  return (
    <Button
      asChild
      size='lg'
      variant='plain'
      className='p-0'
    >
      <Link
        href='/'
        {...props}
        onClick={(ev) => {
          lenis?.scrollTo('body');

          return props?.onClick?.(ev);
        }}
      >
        <LogoIcon
          variant={variant}
          className='h-full! w-auto!'
        />
      </Link>
    </Button>
  );
};
