import { forwardRef } from 'react';

import { cn } from '@/utils';

import ChangeTheme from '../change-theme';

const Section = ({ className, asChild, children, ...props }, ref) => {
  return (
    <ChangeTheme
      className={cn(
        'max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds',
        className,
      )}
      ref={ref}
      {...props}
    >
      {asChild ? children : <section>{children}</section>}
    </ChangeTheme>
  );
};

export default forwardRef(Section);
