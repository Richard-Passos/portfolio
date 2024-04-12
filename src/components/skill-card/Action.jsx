import { cn } from '@/utils';

import { Button } from '../button';

const SkillCardAction = ({ className, variants, ...props }) => {
  return (
    <Button
      className={cn(
        'size-8 bg-muted px-0 [--variant-a:--primary] disabled:opacity-100 group-hover:text-primary-content [&_svg]:size-1/2',
        className,
      )}
      disabled
      variants={{ color: 'main', ...variants }}
      {...props}
    />
  );
};

export default SkillCardAction;
