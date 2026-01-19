'use client';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useBooleanContext } from '@/hooks/contexts';

type DrawerTriggerMoleculeOwnProps = {};

type DrawerTriggerMoleculeProps = DrawerTriggerMoleculeOwnProps &
  Omit<SlotProps, keyof DrawerTriggerMoleculeOwnProps>;

const DrawerTriggerMolecule = (props: DrawerTriggerMoleculeProps) => {
  const { value, toggle } = useBooleanContext();

  const dataState = value ? 'open' : 'closed';

  return (
    <Slot
      data-state={dataState}
      {...props}
      onClick={(ev) => {
        toggle();

        props.onClick?.(ev);
      }}
    />
  );
};

export default DrawerTriggerMolecule;
export type { DrawerTriggerMoleculeProps };
