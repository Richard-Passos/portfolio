import { cn } from '@/utils';

import { IconButton } from '../button';
import { Link } from '../ui';
import { ArrowUpIcon } from '../ui/icon/icons';

const ListHorizontalScrollLink = ({
  className,
  variants,
  children,
  ...props
}) => {
  return (
    <IconButton
      asChild
      className={cn(
        'border-border focus-visible:outline-variant-content',
        className,
      )}
      variants={{ color: 'main', ...variants }}
      {...props}
    >
      <Link className='no-underline'>
        {children}

        <IconButton.Icon animation='slideUpRight'>
          <ArrowUpIcon className='rotate-45' />
        </IconButton.Icon>
      </Link>
    </IconButton>
  );
};

export default ListHorizontalScrollLink;
