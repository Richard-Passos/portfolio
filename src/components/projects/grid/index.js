import ProjectsGridImage from './Image';
import ProjectsGridItem from './Item';
import ProjectsGridLink from './Link';
import ProjectsGridNumber from './Number';
import ProjectsGridRoles from './Roles';
import ProjectsGridRoot from './Root';
import ProjectsGridTitle from './Title';
import ProjectsGridYear from './Year';

const ProjectsGrid = ProjectsGridRoot;

ProjectsGrid.Image = ProjectsGridImage;
ProjectsGrid.Item = ProjectsGridItem;
ProjectsGrid.Link = ProjectsGridLink;
ProjectsGrid.Number = ProjectsGridNumber;
ProjectsGrid.Roles = ProjectsGridRoles;
ProjectsGrid.Title = ProjectsGridTitle;
ProjectsGrid.Year = ProjectsGridYear;

export default ProjectsGrid;
export {
  ProjectsGridRoot as ProjectsGrid,
  ProjectsGridImage,
  ProjectsGridItem,
  ProjectsGridLink,
  ProjectsGridNumber,
  ProjectsGridRoles,
  ProjectsGridTitle,
  ProjectsGridYear,
};
