import HeaderChangeTheme from './ChangeTheme';
import HeaderGetState from './GetState';
import HeaderRoot from './Root';

const Header = HeaderRoot;

Header.ChangeTheme = HeaderChangeTheme;
Header.GetState = HeaderGetState;

export default Header;
export { HeaderRoot as Header, HeaderChangeTheme, HeaderGetState };
