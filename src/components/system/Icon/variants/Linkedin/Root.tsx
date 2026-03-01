import { ComponentProps } from 'react';

import { cn } from '@/utils';

type LinkedinIconRootProps = ComponentProps<'svg'>;

const LinkedinIconRoot = ({ className, ...props }: LinkedinIconRootProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Linkedin'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M7.042 21h-3.79V9.631h3.79V21Zm.379-15.79a2.21 2.21 0 1 0-2.273 2.211A2.25 2.25 0 0 0 7.422 5.21Zm13.528 8.918c0-3.537-2.286-4.623-4.244-4.623a3.927 3.927 0 0 0-3.411 1.769V9.632H9.631v11.369h3.79v-5.899a.872.872 0 0 1 0-.177v-.01a2.197 2.197 0 0 1 2.047-2.339c.985 0 1.743.644 1.743 2.438v5.988h3.79l-.051-6.872Z' />
    </svg>
  );
};

export { LinkedinIconRoot };
export type { LinkedinIconRootProps };
