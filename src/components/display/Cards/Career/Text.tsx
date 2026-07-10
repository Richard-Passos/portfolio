import { Text, TextProps } from '@/components/system/Text';
import { cn } from '@/utils/cn';
import { CollapsibleContent } from '@/components/display/Collapsible';

export type CareerCardTextProps = TextProps;

export const CareerCardText = ({ className, ...props }: CareerCardTextProps) => {
  return (
    <CollapsibleContent asChild>
      <Text
        className={cn(
          'border-t border-border px-[7.5%] pt-6 pb-16 text-sm leading-relaxed tracking-wide whitespace-pre-line',
          className
        )}
        {...props}
      />
    </CollapsibleContent>
  );
};
