import {
  StaggeredTitleOnView,
  StaggeredTitleOnViewProps
} from '@/components/system/Title/StaggeredOnView';
import { cn } from '@/utils/cn';

export type SkillsTitleProps = StaggeredTitleOnViewProps;

export const SkillsTitle = ({ className, ...props }: SkillsTitleProps) => {
  return (
    <StaggeredTitleOnView
      as='h2'
      className={cn('max-w-xl text-center', className)}
      {...props}
    />
  );
};
