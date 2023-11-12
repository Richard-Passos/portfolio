import TextRoot from './Root';
import TextSmall from './Small';
import TextSubtitle from './Subtitle';
import TextTitle from './Title';

const Text = TextRoot;

Text.Small = TextSmall;
Text.Subtitle = TextSubtitle;
Text.Title = TextTitle;

export default Text;
export { TextRoot as Text, TextSmall, TextSubtitle, TextTitle };
