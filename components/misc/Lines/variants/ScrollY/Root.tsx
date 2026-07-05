import { ComponentProps } from 'react';

import { Lines } from '@/components/misc/Lines';
import { ScrollAnimate } from '@/components/motion';
import { yFull } from '@/components/motion/ScrollAnimate/animations';
import { cn } from '@/utils';

type ScrollYLinesProps = ComponentProps<'div'>;

const ScrollYLines = ({ className, ...props }: ScrollYLinesProps) => {
  return (
    <div
      className={cn('relative overflow-hidden border bg-body', className)}
      {...props}
    >
      <ScrollAnimate config={yFull}>
        <Lines className='text-gray-3 dark:text-dark-4 h-full translate-y-0 bg-size-[83.333px_66.666px]' />
      </ScrollAnimate>
    </div>
  );
};

export { ScrollYLines };
export type { ScrollYLinesProps };
