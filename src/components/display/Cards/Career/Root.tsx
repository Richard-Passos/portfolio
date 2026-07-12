import { cn } from '@/utils/cn';
import { AccordionItem, AccordionItemProps } from '@/components/display/Accordion';
import { MergeProps } from '@/types/MergeProps';

export type CareerCardProps = MergeProps<Pick<AccordionItemProps, 'value'>, AccordionItemProps>;

export const CareerCard = ({ asChild, value, className, ...props }: CareerCardProps) => {
  return (
    <AccordionItem
      value={value}
      className={cn('border bg-body', className)}
      {...props}
    />
  );
};
