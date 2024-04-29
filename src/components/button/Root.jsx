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
      <span className='relative z-10 flex size-full items-center justify-center gap-[inherit] rounded-inherit'>
        {children}
      </span>

      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center gap-[inherit] bg-variant-active transition-[clip-path] duration-500 [clip-path:inset(100%_0_0_0_round_50%_50%_0_0)] group-hover:[clip-path:inset(0_round_0)]',
          variants.style === 'alternate' &&
            'z-10 bg-primary text-primary-content',
        )}
      >
        {variants.style === 'alternate' && children}
      </div>
    </>
  );

  return (
    <ButtonUi
      asChild={href}
      className={cn(
        'group relative overflow-hidden transition-none',
        buttonSizes[variants.size || 'md'],
        className,
      )}
      ref={ref}
      variants={{ ...variants, style: 'solid' }}
      aria-label={label}
      {...props}
    >
      {href ? (
        <Link
          href={href}
          className='no-underline'
        >
          {content}
        </Link>
      ) : (
        content
      )}
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
