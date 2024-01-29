import { cn } from '@/utils';

import { ScrollToLink } from '../link';
import { ArrowDownIcon } from '../ui/icon/icons';

const ScrollIndicator = ({ className, ...props }) => {
  return (
    <ScrollToLink
      className={cn(
        'flex h-8 w-8 items-center justify-center overflow-hidden text-muted-content',
        className,
      )}
      {...props}
    >
      <div className='relative animate-scroll-indicator'>
        <ArrowDownIcon className='absolute h-4 w-4 -translate-y-[200%]' />

        <ArrowDownIcon className='h-4 w-4' />
      </div>
    </ScrollToLink>
  );
};

export default ScrollIndicator;
