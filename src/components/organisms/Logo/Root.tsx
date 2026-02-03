import { Icon } from '@/components/atoms';
import ActionLink, {
  ActionLinkProps
} from '@/components/molecules/Action/Link';
import { cn } from '@/utils';

type LogoOrganismOwnProps = {
  variant?: 'primary' | 'secondary';
} & Partial<Pick<ActionLinkProps, 'href'>>;

type LogoOrganismProps = LogoOrganismOwnProps &
  Omit<ActionLinkProps, keyof LogoOrganismOwnProps>;

const LogoOrganism = ({
  variant = 'primary',
  className,
  style,
  ...props
}: LogoOrganismProps) => {
  return (
    <ActionLink
      className={cn('aspect-auto p-0', className)}
      href='/'
      isIconOnly
      size='md'
      style={{
        '--button-bg': 'transparent',
        '--button-bd': 'transparent',
        '--button-hover': 'transparent',
        ...style
      }}
      variant='default'
      {...props}
    >
      <Icon
        className='size-full'
        src={`/icons/logo-${variant}.svg`}
      />
    </ActionLink>
  );
};

export default LogoOrganism;
export type { LogoOrganismProps };
