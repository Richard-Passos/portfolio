import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { ReviewTitleOnScrollClient } from './Client';

export type ReviewTitleOnScrollProps = MergeProps<Pick<TitleProps, 'as'>, ComponentProps<'div'>>;

export const ReviewTitleOnScroll = ({
  as = 'h2',
  className,
  children,
  ...props
}: ReviewTitleOnScrollProps) => {
  return (
    <div
      className={cn(
        'relative -z-10 flex min-h-[calc(var(--h)*2)] w-full items-start overflow-x-clip will-change-transform [--h:min(100dvh,var(--max-height-bounds))]',
        className
      )}
      {...props}
    >
      <ReviewTitleOnScrollClient target={as}>
        <div className='sticky top-0 mx-auto flex h-(--h) w-full items-center'>
          <Title
            as={as}
            className={cn(
              'w-max px-[5%] text-[clamp(8rem,20vw,22rem)]/none font-black text-nowrap will-change-transform'
            )}
          >
            {children}
          </Title>
        </div>
      </ReviewTitleOnScrollClient>
    </div>
  );
};
