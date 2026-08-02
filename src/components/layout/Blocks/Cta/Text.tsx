import { cn } from '@/utils/cn';
import {
  ReviewTextOnScroll,
  ReviewTextOnScrollProps
} from '@/components/system/Text/ReviewOnScroll';

export type CtaTextProps = ReviewTextOnScrollProps;

export const CtaText = ({ className, ...props }: CtaTextProps) => {
  return (
    <ReviewTextOnScroll
      className={cn('mt-4 mr-auto text-4xl md:text-7xl', className)}
      {...props}
    />
  );
};
