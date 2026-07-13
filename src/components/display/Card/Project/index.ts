import { ProjectCardBadge } from './Badge';
import { ProjectCardExtra } from './Extra';
import { ProjectCardGallery } from './Gallery';
import { ProjectCardHeader } from './Header';
import { ProjectCardImage } from './Image';
import { ProjectCard } from './Root';
import { ProjectCardTitle } from './Title';
import { ProjectCardTrigger } from './Trigger';

export * from './Badge';
export * from './Extra';
export * from './Gallery';
export * from './Header';
export * from './Image';
export * from './Root';
export * from './Title';
export * from './Trigger';

export default Object.assign(ProjectCard, {
  Badge: ProjectCardBadge,
  Extra: ProjectCardExtra,
  Gallery: ProjectCardGallery,
  Header: ProjectCardHeader,
  Image: ProjectCardImage,
  Title: ProjectCardTitle,
  Trigger: ProjectCardTrigger
});
