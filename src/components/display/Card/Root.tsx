import { Card, CardProps as CardRootProps } from '@mantine/core';

import { cn } from '@/utils';

const CardRoot = ({ className, ...props }: CardRootProps) => {
  return (
    <Card
      className={cn('bg-body size-full border text-current', className)}
      padding='lg'
      radius='md'
      {...props}
    />
  );
};

export { CardRoot };
export type { CardRootProps };
