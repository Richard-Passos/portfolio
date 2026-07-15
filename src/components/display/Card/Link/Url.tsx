import { cn } from '@/utils/cn';
import { Text, TextProps } from '@/components/system/Text';
import { MergeProps } from '@/types/MergeProps';

export type LinkCardUrlProps = MergeProps<{ url: string }, TextProps, 'children'>;

export const LinkCardUrl = ({ className, url, ...props }: LinkCardUrlProps) => {
  const domain = new URL(url).hostname.replace('www.', '');

  return (
    <Text
      className={cn('text-center text-xs text-placeholder [&_b]:text-body-emphasis', className)}
      {...props}
    >
      {domain}
    </Text>
  );
};
