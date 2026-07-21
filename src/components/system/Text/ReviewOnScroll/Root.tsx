import { Text, TextProps } from '@/components/system/Text/Root';
import { ReviewTextOnScrollAnim } from '@/components/system/Text/ReviewOnScroll/Anim';

export type ReviewTextOnScrollProps = TextProps;

export const ReviewTextOnScroll = (props: ReviewTextOnScrollProps) => {
  return (
    <ReviewTextOnScrollAnim>
      <Text {...props} />
    </ReviewTextOnScrollAnim>
  );
};
