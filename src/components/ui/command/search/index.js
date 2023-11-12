import ContentMenuSearchIcon from './Icon';
import ContentMenuSearchInput from './Input';
import ContentMenuSearchRoot from './Root';

const ContentMenuSearch = ContentMenuSearchRoot;

ContentMenuSearch.Input = ContentMenuSearchInput;
ContentMenuSearch.Icon = ContentMenuSearchIcon;

export default ContentMenuSearch;
export {
  ContentMenuSearchRoot as ContentMenuSearch,
  ContentMenuSearchInput,
  ContentMenuSearchIcon,
};
