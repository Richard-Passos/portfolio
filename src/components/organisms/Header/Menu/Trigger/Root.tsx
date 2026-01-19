import { Portal, ScrollAnimate } from '@/components/atoms';
import { MenuIcon, TimesIcon } from '@/components/atoms/Icon/icons';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import Action, { ActionProps } from '@/components/molecules/Action';
import { DrawerTrigger } from '@/components/molecules/Drawer';
import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

const ANIMATION_CONFIG: ScrollAnimateConfigOptions = {
  scroll: 'scrollY',
  scrollPoints: [0, 99.999, 100],
  prop: '--scale',
  propPoints: [0, 0, 1]
};

type HeaderMenuTriggerOrganismOwnProps = {
  label: {
    open: string;
    close: string;
  };
};

type HeaderMenuTriggerOrganismProps = HeaderMenuTriggerOrganismOwnProps &
  ActionProps;

const HeaderMenuTriggerOrganism = ({
  label,
  className,
  magneticProps,
  ...props
}: HeaderMenuTriggerOrganismProps) => {
  return (
    <Portal>
      <ScrollAnimate
        config={ANIMATION_CONFIG}
        smoothConfig={smoothConfig}
      >
        <div
          className={`z-max fixed top-(--side) right-[calc(var(--side)+var(--removed-body-scroll-bar-size,0px))] scale-(--scale) [--side:var(--spacing-md)] has-data-[state="open"]:scale-100 sm:[--side:var(--spacing-xl)]`}
        >
          <DrawerTrigger>
            <Action
              className={cn(`h-16 rounded-full sm:h-20`, className)}
              isIconOnly
              magneticProps={{
                ...magneticProps,
                limit: { x: 0.5, y: 0.5, ...magneticProps?.limit }
              }}
              variant='default'
              {...props}
            >
              <MenuIcon
                className={`size-[40%] group-data-[state=open]/action:hidden`}
              />

              <TimesIcon
                className={`absolute size-[40%] group-data-[state=closed]/action:hidden`}
              />

              <span className={`sr-only data-[state=open]:hidden`}>
                {label.open}
              </span>

              <span className={`sr-only data-[state=closed]:hidden`}>
                {label.close}
              </span>
            </Action>
          </DrawerTrigger>
        </div>
      </ScrollAnimate>
    </Portal>
  );
};

export default HeaderMenuTriggerOrganism;
export type { HeaderMenuTriggerOrganismProps };
