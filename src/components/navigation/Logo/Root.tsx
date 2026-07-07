import { Button } from '@/components/input/Button';
import { LogoIcon, LogoIconProps } from '@/components/system/icons/Logo';
import { MergeProps } from '@/types/MergeProps';

import { Link, type LinkProps } from '../Link';

export type LogoProps = MergeProps<
  {
    variant?: LogoIconProps['variant'];
  },
  LinkProps,
  'href'
>;

export const Logo = ({ variant = 'primary', ...props }: LogoProps) => {
  return (
    <Button
      asChild
      size='lg'
      variant='link'
      className='p-0'
    >
      <Link
        href='/'
        {...props}
      >
        <LogoIcon
          variant={variant}
          className='h-full! w-auto!'
        />
      </Link>
    </Button>
  );
};
