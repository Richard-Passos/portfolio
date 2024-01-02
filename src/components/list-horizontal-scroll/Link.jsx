import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils';

import { IconButton } from '../button';
import { Link } from '../ui';

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
          <ArrowTopRightIcon />
        </IconButton.Icon>
      </Link>
    </IconButton>
  );
};

export default ListHorizontalScrollLink;
