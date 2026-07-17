import { Text, TextProps } from '@/components/system/Text';
import { cn } from '@/utils/cn';
import { AccordionContent } from '@/components/display/Accordion';

export type CareerCardTextProps = TextProps;

export const CareerCardText = ({ className, ...props }: CareerCardTextProps) => {
  return (
    <AccordionContent asChild>
      <Text
        className={cn(
          'border-t px-[7.5%] pt-6 pb-16 text-sm leading-relaxed tracking-wide whitespace-pre-line',
          className
        )}
        {...props}
      />
    </AccordionContent>
  );
};
