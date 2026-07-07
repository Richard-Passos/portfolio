import { Button, type ButtonProps } from '@/components/input/Button';
import { DrawerTrigger } from '@/components/modules/Drawer';

export type MenuDrawerTriggerMobileProps = ButtonProps

export const MenuDrawerTriggerMobile = (props: MenuDrawerTriggerMobileProps) => {
  return (
    <DrawerTrigger asChild>
      <Button
        variant='default'
        {...props}
      />
    </DrawerTrigger>
  );
};
