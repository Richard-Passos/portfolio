import { cn } from '@/utils';
import { TextSubtitle } from '../ui/text';

const StatsTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle className={cn('text-7xl font-bold tracking-tight sm:text-8xl', className)} {...props}/>
  );
};

export default StatsTitle;