import SocialNavItem from './Item';
import SocialNavRoot from './Root';

const SocialNav = SocialNavRoot;

SocialNav.Item = SocialNavItem;

export default SocialNav;
export { SocialNavRoot as SocialNav, SocialNavItem };
