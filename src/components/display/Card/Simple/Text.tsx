import { cn } from '@/utils/cn';
import { Text, TextProps } from '@/components/system/Text';

export type SimpleCardTextProps = TextProps;

export const SimpleCardText = ({ className, ...props }: SimpleCardTextProps) => {
  return (
    <Text
      className={cn('leading-tight font-medium', className)}
      {...props}
    />
  );
};
