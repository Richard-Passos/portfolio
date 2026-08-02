import {
  ReviewTitleOnScroll,
  ReviewTitleOnScrollProps
} from '@/components/system/Title/ReviewOnScroll';

export type CareerTitleProps = ReviewTitleOnScrollProps;

export const CareerTitle = (props: CareerTitleProps) => {
  return <ReviewTitleOnScroll {...props} />;
};
