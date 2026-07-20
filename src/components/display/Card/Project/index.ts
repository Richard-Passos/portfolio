import { ProjectCardBadge } from './Badge';
import { ProjectCardExtra } from './Extra';
import { ProjectCardGroup } from './Group';
import { ProjectCardHeader } from './Header';
import { ProjectCardImage } from './Image';
import { ProjectCard } from './Root';
import { ProjectCardTitle } from './Title';
import { ProjectCardTrigger } from './Trigger';

export * from './Badge';
export * from './Extra';
export * from './Group';
export * from './Header';
export * from './Image';
export * from './Root';
export * from './Title';
export * from './Trigger';

export default Object.assign(ProjectCard, {
  Badge: ProjectCardBadge,
  Extra: ProjectCardExtra,
  Group: ProjectCardGroup,
  Header: ProjectCardHeader,
  Image: ProjectCardImage,
  Title: ProjectCardTitle,
  Trigger: ProjectCardTrigger
});
