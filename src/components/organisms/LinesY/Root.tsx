import { ComponentProps } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate } from '@/components/atoms';
import { cn } from '@/utils';

type LinesYOrganismProps = ComponentProps<'div'>;

const LinesYOrganism = ({ className, ...props }: LinesYOrganismProps) => {
  return (
    <div
      className={cn('bg-body relative overflow-hidden border', className)}
      {...props}
    >
      <ScrollAnimate config={yFullScrollAnim}>
        <Lines className='text-gray-3 dark:text-dark-4 h-full translate-y-0 bg-size-[83.333px_66.666px]' />
      </ScrollAnimate>
    </div>
  );
};

export default LinesYOrganism;
export type { LinesYOrganismProps };
