import { cn } from '@/utils';

import Button from '../button';

const ListHorizontalScrollLink = ({ className, variants, ...props }) => {
  return (
    <Button
      className={cn(
        'tracking-widest shadow-[0_0_50px_-15px_var(--tw-shadow-color)] shadow-[hsl(0_0%_80%/.25)] transition-[background-color,color,border,box-shadow] dark:shadow-[hsl(0_0%_5%/.25)]',
        className,
      )}
      isLink
      limit={0.4}
      variants={{ color: 'main', style: 'basic', size: 'lg', ...variants }}
      {...props}
    />
  );
};

export default ListHorizontalScrollLink;
