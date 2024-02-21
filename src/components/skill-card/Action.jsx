import { cn } from '@/utils';

import { Button } from '../button';

const SkillCardAction = ({ className, variants, ...props }) => {
  return (
    <Button
      className={cn(
        'size-8 bg-muted px-0 text-content [--variant-a:--primary] disabled:opacity-100 group-hover:text-primary-content group-hover:delay-100 [&_svg]:size-1/2',
        className,
      )}
      disabled
      variants={{ color: 'main', ...variants }}
      {...props}
    />
  );
};
export default SkillCardAction;
