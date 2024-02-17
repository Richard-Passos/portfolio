import SkillCardAction from './Action';
import SkillCardDescription from './Description';
import SkillCardIcon from './Icon';
import SkillCardNumber from './Number';
import SkillCardRoot from './Root';
import SkillCardTitle from './Title';
import SkillCardWaterMark from './WaterMark';

const SkillCard = SkillCardRoot;

SkillCard.Action = SkillCardAction;
SkillCard.Description = SkillCardDescription;
SkillCard.Icon = SkillCardIcon;
SkillCard.Number = SkillCardNumber;
SkillCard.Title = SkillCardTitle;
SkillCard.WaterMark = SkillCardWaterMark;

export default SkillCard;
export {
  SkillCardRoot as SkillCard,
  SkillCardAction,
  SkillCardDescription,
  SkillCardIcon,
  SkillCardNumber,
  SkillCardTitle,
  SkillCardWaterMark,
};
