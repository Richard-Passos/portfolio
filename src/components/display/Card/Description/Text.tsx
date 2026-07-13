import { cn } from '@/utils/cn';
import { Text, TextProps } from '@/components/system/Text';

export type DescriptionCardTextProps = TextProps;

export const DescriptionCardText = ({ className, ...props }: DescriptionCardTextProps) => {
  return (
    <Text
      className={cn('text-md/relaxed mt-16 text-placeholder *:text-body-emphasis', className)}
      {...props}
    />
  );
};
