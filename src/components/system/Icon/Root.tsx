import { Ref } from 'react';
import Icon, { Props } from 'react-inlinesvg';

import { MergeProps } from '@/types';
import { cn } from '@/utils';

type IconRootProps = MergeProps<
  {
    ref?: Ref<SVGElement | null>;
  },
  Props
>;

const IconRoot = ({ className, ref, ...props }: IconRootProps) => {
  return (
    <Icon
      className={cn(`size-full *:fill-current`, className)}
      innerRef={ref}
      {...props}
    />
  );
};

export { IconRoot };
export type { IconRootProps };
