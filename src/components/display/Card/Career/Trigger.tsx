import data from './.data';

import { cn } from '@/utils/cn';
import { AccordionIndicator, AccordionTrigger } from '@/components/display/Accordion';
import { PlusIcon } from '@/components/system/Icon/Plus';
import { Button, ButtonProps } from '@/components/input/Button';

export type CareerCardTriggerProps = Omit<ButtonProps, 'children'>;

export const CareerCardTrigger = ({ className, ...props }: CareerCardTriggerProps) => {
  return (
    <AccordionTrigger asChild>
      <Button
        iconOnly
        className={cn(
          'ml-auto h-auto rounded-none border-l-border px-12 text-placeholder transition-none engaged:z-0 engaged:text-primary',
          className
        )}
        {...props}
      >
        <AccordionIndicator>
          <PlusIcon className='transition-[rotate] duration-700 ease-backOut group-data-[state=open]/button:rotate-405' />

          <span className='sr-only data-[state=open]:hidden'>{data.open}</span>

          <span className='sr-only data-[state=closed]:hidden'>{data.close}</span>
        </AccordionIndicator>
      </Button>
    </AccordionTrigger>
  );
};
