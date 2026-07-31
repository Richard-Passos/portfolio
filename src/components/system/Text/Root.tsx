import { ark } from '@ark-ui/react/factory';
import { Children, ComponentProps, isValidElement, ReactElement, ReactNode } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type TextProps = MergeProps<{ small?: boolean }, ComponentProps<typeof ark.p>>;

export const hasParagraphs = (children: ReactNode): boolean =>
  Children.toArray(children).some((child) => {
    if (!isValidElement(child)) {
      return false;
    }

    if (child.type === 'p') {
      return true;
    }

    const element = child as ReactElement<{ children?: ReactNode }>;

    return element.props.children ? hasParagraphs(element.props.children) : false;
  });

export const Text = ({ small, className, children, ...props }: TextProps) => {
  const hasP = hasParagraphs(children);
  const Comp = ark[small ? 'small' : !hasP ? 'p' : 'section'];

  return (
    <Comp
      className={cn(hasP && '[&_p]:not-first:mt-[1em]', className)}
      {...props}
    >
      {children}
    </Comp>
  );
};
