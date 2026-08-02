import {
  StaggeredTitleOnView,
  StaggeredTitleOnViewProps
} from '@/components/system/Title/StaggeredOnView';

import { cn } from '@/utils/cn';

export type PrimaryHeroTitleProps = StaggeredTitleOnViewProps;

export const PrimaryHeroTitle = ({ className, ...props }: PrimaryHeroTitleProps) => {
  return (
    <StaggeredTitleOnView
      as='h1'
      data-title
      className={cn(
        'flex w-9/10 max-w-5xl flex-wrap justify-center gap-x-[.3em] wrap-break-word uppercase max-sm:text-center',
        className
      )}
      {...props}
    />
  );
};
