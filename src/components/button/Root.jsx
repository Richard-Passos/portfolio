import { forwardRef } from 'react';

import { cn } from '@/utils';

import { Link } from '../ui';
import ButtonUi from '../ui/button';

const Button = (
  { children, href, variants = {}, className, label, ...props },
  ref,
) => {
  const content = (
    <>
      <span
        className={cn(
          'relative z-10 flex size-full items-center justify-center rounded-inherit',
          buttonSizes[variants.size || 'md'],
        )}
      >
        {children}
      </span>

      <div className='absolute inset-0 translate-y-full overflow-hidden rounded-[50%_50%_0_0] transition-[transform,border-radius] duration-500 group-hover:translate-y-0 group-hover:rounded-none'>
        <span className='size-full bg-variant-active transition-bg' />
      </div>
    </>
  );

  return (
    <ButtonUi
      asChild={href}
      className={cn('group relative overflow-hidden delay-100', className)}
      href={href}
      ref={ref}
      variants={variants}
      aria-label={label}
      {...props}
    >
      {href ? <Link className='no-underline'>{content}</Link> : content}
    </ButtonUi>
  );
};

const buttonSizes = {
  sm: 'gap-x-2',
  md: 'gap-x-3',
  lg: 'gap-x-4',
};

export default forwardRef(Button);
export { buttonSizes };
