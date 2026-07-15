import { MergeProps } from '@/types/MergeProps';
import { Text, TextProps } from '@/components/system/Text/Root';
import {
  ReviewTextOnScrollClient,
  ReviewTextOnScrollClientConfig
} from '@/components/system/Text/ReviewOnScroll/Client';

export type ReviewTextOnScrollProps = MergeProps<ReviewTextOnScrollClientConfig, TextProps>;

export const ReviewTextOnScroll = ({ type, to, start, end, ...props }: ReviewTextOnScrollProps) => {
  return (
    <ReviewTextOnScrollClient
      type={type}
      to={to}
      start={start}
      end={end}
    >
      <Text {...props} />
    </ReviewTextOnScrollClient>
  );
};
