import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { DrawerTrigger } from '@/components/molecules/Drawer';

type HeaderMenuTriggerMobileOrganismOwnProps = {};

type HeaderMenuTriggerMobileOrganismProps =
  HeaderMenuTriggerMobileOrganismOwnProps &
    Omit<ButtonProps, keyof HeaderMenuTriggerMobileOrganismOwnProps>;

const HeaderMenuTriggerMobileOrganism = (
  props: HeaderMenuTriggerMobileOrganismProps
) => {
  return (
    <DrawerTrigger>
      <Button
        variant='default'
        {...props}
      />
    </DrawerTrigger>
  );
};

export default HeaderMenuTriggerMobileOrganism;
export type { HeaderMenuTriggerMobileOrganismProps };
