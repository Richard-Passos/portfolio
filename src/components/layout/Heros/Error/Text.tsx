import { Text, TextProps } from '@/components/system/Text';
import { cn } from '@/utils/cn';

export type ErrorHeroTextProps = TextProps;

export const ErrorHeroText = ({ className, ...props }: ErrorHeroTextProps) => {
  return (
    <Text
      className={cn('mt-2 max-w-md text-placeholder', className)}
      {...props}
    />
  );
};
