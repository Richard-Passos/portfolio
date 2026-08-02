import { cn } from '@/utils/cn';
import { Text, TextProps } from '@/components/system/Text';

export type ButTextProps = TextProps;

export const ButText = ({ className, ...props }: ButTextProps) => {
  return (
    <Text
      data-text
      className={cn('max-w-lg text-center text-5xl md:text-7xl', className)}
      {...props}
    />
  );
};
