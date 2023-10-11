import { Icon } from '@/components';
import { cn } from '@/utils';

const NavigationMenuIcon = ({ className, ...props }) => {
  return (
    <Icon
      aria-hidden
      className={cn(
        'relative top-px ml-1 h-3 w-3 transition-transform group-data-open:rotate-180',
        className,
      )}
      name='ChevronDown'
      {...props}
    />
  );
};

export default NavigationMenuIcon;
