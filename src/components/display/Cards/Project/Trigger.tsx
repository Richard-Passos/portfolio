import { Button } from '@/components/input/Button';
import { Link, LinkProps } from '@/components/navigation/Link';
import { PlusIcon } from '@/components/system/Icons/Plus';
import { cn } from '@/utils/cn';

export type ProjectCardTriggerProps = LinkProps;

export const ProjectCardTrigger = ({ className, ...props }: ProjectCardTriggerProps) => {
  return (
    <Button
      asChild
      iconOnly
    >
      <Link
        className={cn(
          'ml-auto h-auto shrink-0 rounded-none border-l-border p-8 text-2xl transition-none engaged:text-primary',
          className
        )}
        {...props}
      >
        <PlusIcon className='transition-[rotate] duration-700 ease-in-out group-engaged/button:rotate-360' />
      </Link>
    </Button>
  );
};
