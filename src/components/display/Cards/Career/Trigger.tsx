import data from './.data';

import { cn } from '@/utils/cn';
import { CollapsibleIndicator, CollapsibleTrigger } from '@/components/display/Collapsible';
import { PlusIcon } from '@/components/system/Icons/Plus';
import { Button, ButtonProps } from '@/components/input/Button';

export type CareerCardTriggerProps = Omit<ButtonProps, 'children'>;

export const CareerCardTrigger = ({ className, ...props }: CareerCardTriggerProps) => {
  return (
    <CollapsibleTrigger asChild>
      <Button
        iconOnly
        className={cn(
          'ml-auto h-fit rounded-none border-l-border px-12 text-placeholder hover:text-primary',
          className
        )}
        {...props}
      >
        <CollapsibleIndicator>
          <PlusIcon className='transition-[rotate] duration-700 ease-backOut group-data-[state=open]/button:rotate-405' />

          <span className='sr-only data-[state=open]:hidden'>{data.open}</span>

          <span className='sr-only data-[state=closed]:hidden'>{data.close}</span>
        </CollapsibleIndicator>
      </Button>
    </CollapsibleTrigger>
  );
};
