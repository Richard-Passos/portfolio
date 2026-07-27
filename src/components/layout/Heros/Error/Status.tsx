import {
  ReviewTitleOnScroll,
  ReviewTitleOnScrollProps
} from '@/components/system/Title/ReviewOnScroll';

export type ErrorHeroStatusProps = ReviewTitleOnScrollProps;

export const ErrorHeroStatus = (props: ErrorHeroStatusProps) => {
  return <ReviewTitleOnScroll {...props} />;
};
