import { cn } from '@/utils/cn';
import { Text, TextProps } from '@/components/system/Text';
import { LocalTime } from '@/components/system/LocalTime';

export type TimeCardTextProps = TextProps;

export const TimeCardText = ({ className, children, ...props }: TimeCardTextProps) => {
  return (
    <Text
      className={cn(
        'mt-1 text-center text-[14vw] leading-none font-bold sm:text-[min(8vw,6rem)]',
        className
      )}
      {...props}
    >
      {children ?? <LocalTime />}
    </Text>
  );
};
