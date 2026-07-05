import { Link, LinkProps } from '@/components/navigation/Link';
import { Icon } from '@/components/system';
import { MergeProps } from '@/types';

type LogoRootProps = MergeProps<
  {
    variant?: 'primary' | 'secondary';
  },
  LinkProps,
  'href'
>;

const LogoRoot = ({ variant = 'primary', ...props }: LogoRootProps) => {
  return (
    <Link
      href='/'
      size='md'
      {...props}
    >
      <Icon
        className='size-full'
        src={`/icons/logo-${variant}.svg`}
      />
    </Link>
  );
};

export { LogoRoot };
export type { LogoRootProps };
