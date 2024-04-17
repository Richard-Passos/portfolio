import { cn } from '@/utils';

import { Button } from '../button';
import { ScrollToLink } from '../link';
import { ArrowDownIcon } from '../ui/icon/icons';

const ScrollIndicator = ({ className, variants, ...props }) => {
  return (
    <ScrollToLink
      asChild
      href='#scrollTo'
      {...props}
    >
      <Button
        className={cn(
          'aspect-square rounded-sm bg-muted px-0 [&>span]:animate-scroll-indicator [&_svg]:size-[40%]',
          className,
        )}
        variants={{ color: 'main', size: 'sm', style: 'alternate', ...variants }}
      >
        <ArrowDownIcon className='absolute bottom-[150%] translate-y-1/2' />

        <ArrowDownIcon />
      </Button>
    </ScrollToLink>
  );
};

export default ScrollIndicator;
