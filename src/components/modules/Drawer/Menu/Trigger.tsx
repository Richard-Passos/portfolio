import { Button, ButtonProps } from '@/components/input/Button';
import { DrawerTrigger } from '@/components/modules/Drawer';
import { cn } from '@/utils/cn';
import { useIntlayer } from 'next-intlayer/server';

export type MenuDrawerTriggerProps = Omit<ButtonProps, 'children'>;

export const MenuDrawerTrigger = ({ className, ...props }: MenuDrawerTriggerProps) => {
  const t = useIntlayer('menu-drawer');

  return (
    <DrawerTrigger>
      <Button
        aria-label={t.menu.open.value}
        className={cn('border-border', className)}
        {...props}
      >
        {t.menu.label}
      </Button>
    </DrawerTrigger>
  );
};
