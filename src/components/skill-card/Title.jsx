import { cn } from '@/utils';

import { TextSubtitle } from '../ui/text';

const SkillCardTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn('text-sm text-muted-content', className)}
      {...props}
    />
  );
};
export default SkillCardTitle;
