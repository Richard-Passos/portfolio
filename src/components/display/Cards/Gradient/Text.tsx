import { Text, TextProps } from '@/components/system/Text';
import { cn } from '@/utils/cn';

export type GradientCardTextProps = TextProps;

export const GradientCardText = ({ className, ...props }: GradientCardTextProps) => {
  return (
    <Text
      small
      className={cn('mt-2 whitespace-pre-line text-placeholder', className)}
      {...props}
    />
  );
};
