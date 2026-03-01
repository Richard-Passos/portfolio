import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/display/Button';
import { DrawerTrigger } from '@/components/modules/Drawer';
import { MergeProps } from '@/types';

type HeaderMenuTriggerMobileOwnProps = {};

type HeaderMenuTriggerMobileProps = MergeProps<
  HeaderMenuTriggerMobileOwnProps,
  ButtonProps
>;

const HeaderMenuTriggerMobile = (props: HeaderMenuTriggerMobileProps) => {
  return (
    <DrawerTrigger>
      <Button
        variant='default'
        {...props}
      />
    </DrawerTrigger>
  );
};

export { HeaderMenuTriggerMobile };
export type { HeaderMenuTriggerMobileProps };
