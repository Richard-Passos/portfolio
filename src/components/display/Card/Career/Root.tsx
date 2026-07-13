import { cn } from '@/utils/cn';
import { AccordionItem, AccordionItemProps } from '@/components/display/Accordion';

export type CareerCardProps = AccordionItemProps;

export const CareerCard = ({ className, ...props }: CareerCardProps) => {
  return (
    <AccordionItem
      className={cn('border bg-body', className)}
      {...props}
    />
  );
};
