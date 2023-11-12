import CardActions from './Actions';
import CardContent from './Content';
import CardDescription from './Description';
import CardHeader from './Header';
import CardRoot from './Root';
import CardTitle from './Title';

const Card = CardRoot;

Card.Content = CardContent;
Card.Description = CardDescription;
Card.Actions = CardActions;
Card.Header = CardHeader;
Card.Title = CardTitle;

export default Card;
export {
  CardRoot as Card,
  CardContent,
  CardDescription,
  CardActions,
  CardHeader,
  CardTitle,
};
