import HeaderMenuTriggerMobile, {
  HeaderMenuTriggerMobileProps
} from './Mobile';
import HeaderMenuTriggerRoot, {
  HeaderMenuTriggerProps as HeaderMenuTriggerRootProps
} from './Root';

const HeaderMenuTrigger = {
  Root: HeaderMenuTriggerRoot,
  Mobile: HeaderMenuTriggerMobile
};

export { HeaderMenuTrigger };
export { HeaderMenuTriggerRoot, HeaderMenuTriggerMobile };
export type { HeaderMenuTriggerRootProps, HeaderMenuTriggerMobileProps };
