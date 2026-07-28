import { cn } from '@/utils/cn';
import { AccordionIndicator, AccordionTrigger } from '@/components/display/Accordion';
import { PlusIcon } from '@/components/system/Icon/Plus';
import { Button, ButtonProps } from '@/components/input/Button';
import { useIntlayer } from 'next-intlayer/server';

export type CareerCardTriggerProps = Omit<ButtonProps, 'children'>;

export const CareerCardTrigger = ({ className, ...props }: CareerCardTriggerProps) => {
  const t = useIntlayer('career-card');

  return (
    <AccordionTrigger asChild>
      <Button
        iconOnly
        className={cn(
          '-mt-px ml-auto h-auto rounded-none border-t-border border-l-border px-6 text-placeholder transition-none md:px-12 engaged:text-primary',
          className
        )}
        {...props}
      >
        <AccordionIndicator>
          <PlusIcon className='transition-[rotate] duration-700 ease-backOut group-data-[state=open]/button:rotate-405' />

          <span className='sr-only data-[state=open]:hidden'>{t.open}</span>

          <span className='sr-only data-[state=closed]:hidden'>{t.close}</span>
        </AccordionIndicator>
      </Button>
    </AccordionTrigger>
  );
};
