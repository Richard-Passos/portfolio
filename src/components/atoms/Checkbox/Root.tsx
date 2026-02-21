import { Checkbox, CheckboxProps } from '@mantine/core';

import { cn } from '@/utils';

import Card from './Card';
import Group from './Group';
import Indicator from './Indicator';

type CheckboxAtomProps = CheckboxProps;

const CheckboxAtom = ({ className, ...props }: CheckboxAtomProps) => {
  return (
    <Checkbox
      className={cn(
        `[--divider-color:var(--color-border)] dark:[--divider-color:var(--color-border)]`,
        className
      )}
      {...props}
    />
  );
};
CheckboxAtom.Group = Group;
CheckboxAtom.Card = Card;
CheckboxAtom.Indicator = Indicator;

export default CheckboxAtom;
export type { CheckboxAtomProps };
