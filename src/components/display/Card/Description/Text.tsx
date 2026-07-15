import { cn } from '@/utils/cn';
import { Text, TextProps } from '@/components/system/Text';

export type DescriptionCardTextProps = TextProps;

export const DescriptionCardText = ({ className, ...props }: DescriptionCardTextProps) => {
  return (
    <Text
      className={cn(
        'mt-8 leading-relaxed tracking-wide text-placeholder [&_b]:text-body-emphasis',
        className
      )}
      {...props}
    />
  );
};
