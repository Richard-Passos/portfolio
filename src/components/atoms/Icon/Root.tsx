import Icon, { Props } from 'react-inlinesvg';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type IconAtomOwnProps = {
  ref?: PolymorphicRef<'svg'>;
};

type IconAtomProps = IconAtomOwnProps & Omit<Props, keyof IconAtomOwnProps>;

const IconAtom = ({ className, ref, ...props }: IconAtomProps) => {
  return (
    <Icon
      className={cn(`size-full *:fill-current`, className)}
      innerRef={ref}
      {...props}
    />
  );
};

export default IconAtom;
export type { IconAtomProps };
