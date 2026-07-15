import { Badge, BadgeProps } from '@/components/display/Badge';

export type DescriptionCardBadgeProps = BadgeProps;

export const DescriptionCardBadge = (props: DescriptionCardBadgeProps) => {
  return (
    <Badge
      color='primary'
      variant='subtle'
      {...props}
    />
  );
};
