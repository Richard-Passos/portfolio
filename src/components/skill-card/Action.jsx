import { cn } from '@/utils';

import { Button } from '../button';

const SkillCardAction = ({ className, variants, ...props }) => {
  return (
    <Button
      className={cn(
        'size-8 bg-muted px-0 disabled:opacity-100 [&_svg]:size-1/2',
        className,
      )}
      disabled
      variants={{ color: 'main', style: 'alternate', ...variants }}
      {...props}
    />
  );
};

export default SkillCardAction;
