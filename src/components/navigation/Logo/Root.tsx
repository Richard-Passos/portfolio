import { Button } from '@/components/input';
import { Link, type LinkProps } from '@/components/navigation/Link';
import { LogoIcon, LogoIconProps } from '@/components/system/icons';
import { MergeProps } from '@/types';

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
      size='lg'
      className='bg-transparent! p-0'
      asChild
    >
      <Link
        href='/'
        {...props}
      >
        <LogoIcon
          variant={variant}
          className='h-full'
        />
      </Link>
    </Button>
  );
};
