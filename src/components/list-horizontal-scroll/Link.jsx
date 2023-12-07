import { cn } from '@/utils';

import { MagneticButton } from '../button';

const ListHorizontalScrollLink = ({ className, variants, ...props }) => {
  return (
    <MagneticButton
      className={cn(
        'uppercase shadow-[0_0_50px_-15px_var(--tw-shadow-color)] shadow-[hsl(0_0%_80%/.25)] transition-[color,background-color,border-color,text-decoration-color,box-shadow,text-underline-offset] focus-visible:outline-variant-content dark:shadow-[hsl(0_0%_5%/.25)]',
        className,
      )}
      isLink
      limit={0.4}
      variants={{ color: 'main', size: 'lg', ...variants }}
      {...props}
    />
  );
};

export default ListHorizontalScrollLink;
