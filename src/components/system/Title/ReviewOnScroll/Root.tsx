import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { ReviewTitleOnScrollAnim } from './Anim';

export type ReviewTitleOnScrollProps = MergeProps<
  Pick<TitleProps, 'as' | 'className'>,
  ComponentProps<'div'>
>;

export const ReviewTitleOnScroll = ({
  as = 'h2',
  className,
  children,
  ...props
}: ReviewTitleOnScrollProps) => {
  return (
    <ReviewTitleOnScrollAnim>
      <div
        className='relative -z-10 w-full overflow-x-clip will-change-transform'
        {...props}
      >
        <div
          data-sticky
          className='sticky top-0 flex h-(--h) w-full items-center'
        >
          <Title
            as={as}
            data-title
            className={cn(
              'w-max px-[5%] text-[clamp(8rem,20vw,22rem)]/none font-black text-nowrap will-change-transform',
              className
            )}
          >
            {children}
          </Title>
        </div>
      </div>
    </ReviewTitleOnScrollAnim>
  );
};
