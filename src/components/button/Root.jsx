import { forwardRef } from 'react';

import Magnetic from '../magnetic';
import { Button as ButtonUi, Link } from '../ui';

const Button = (
  { limit = 0.5, children, className, isLink, variants, ...props },
  ref,
) => {
  const content = (
    <Magnetic limit={limit - 0.1}>
      <span className='flex h-full w-full items-center justify-center rounded-inherit'>
        {children}
      </span>
    </Magnetic>
  );

  return (
    <Magnetic
      limit={limit}
      ref={ref}
      {...props}
    >
      <ButtonUi
        asChild={isLink}
        className={className}
        variants={variants}
      >
        {isLink ? <Link>{content}</Link> : content}
      </ButtonUi>
    </Magnetic>
  );
};

export default forwardRef(Button);
