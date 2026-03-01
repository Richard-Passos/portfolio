import { Badge, BadgeProps as BadgeRootProps } from '@mantine/core';

import { cn } from '@/utils';

const BadgeRoot = ({
  color = 'primary',
  variant = 'filled',
  className,
  style,
  ...props
}: BadgeRootProps) => {
  return (
    <Badge
      color={color}
      variant={variant}
      className={cn('normal-case', className)}
      style={{
        '--badge-fz-md': 'calc(.75rem * var(--mantine-scale))',
        '--badge-height-md': 'calc(1.5rem * var(--mantine-scale))',
        ...(color === 'primary' &&
          variant === 'filled' && {
            '--badge-color': 'var(--mantine-primary-color-contrast)'
          }),
        ...style
      }}
      {...props}
    />
  );
};

export { BadgeRoot };
export type { BadgeRootProps };
