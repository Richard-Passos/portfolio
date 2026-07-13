import { cn } from '@/utils/cn';
import { Text, TextProps } from '@/components/system/Text';

export type LinkCardTextProps = TextProps;

export const LinkCardText = ({ className, ...props }: LinkCardTextProps) => {
  return (
    <Text
      className={cn('text-center text-xs text-placeholder *:text-body-emphasis', className)}
      {...props}
    />
  );
};
