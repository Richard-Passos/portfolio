import { cn } from '@/utils/cn';
import { Text, TextProps } from '@/components/system/Text';

export type MissionTextProps = TextProps;

export const MissionText = ({ className, ...props }: MissionTextProps) => {
  return (
    <Text
      className={cn('mt-12 w-9/10 max-w-xl text-center leading-relaxed tracking-wide', className)}
      {...props}
    />
  );
};
