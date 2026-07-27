import { Button, ButtonProps } from '@/components/input/Button';
import { Link, LinkProps } from '@/components/navigation/Link/Root';
import { MergeProps } from '@/types/MergeProps';

export type ButtonLinkProps = MergeProps<Omit<LinkProps, 'color'>, ButtonProps, 'asChild'>;

export const ButtonLink = ({ size, color, variant, iconOnly, ...props }: ButtonLinkProps) => {
  return (
    <Button
      asChild
      size={size}
      color={color}
      variant={variant}
      iconOnly={iconOnly}
    >
      <Link {...props} />
    </Button>
  );
};
