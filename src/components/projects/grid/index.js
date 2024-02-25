import ProjectsGridImage from './Image';
import ProjectsGridItem from './Item';
import ProjectsGridNumber from './Number';
import ProjectsGridRoles from './Roles';
import ProjectsGridRoot from './Root';
import ProjectsGridTitle from './Title';
import ProjectsGridYear from './Year';

const ProjectsGrid = ProjectsGridRoot;

ProjectsGrid.Image = ProjectsGridImage;
ProjectsGrid.Item = ProjectsGridItem;
ProjectsGrid.Number = ProjectsGridNumber;
ProjectsGrid.Roles = ProjectsGridRoles;
ProjectsGrid.Title = ProjectsGridTitle;
ProjectsGrid.Year = ProjectsGridYear;

export default ProjectsGrid;
export {
  ProjectsGridRoot as ProjectsGrid,
  ProjectsGridImage,
  ProjectsGridItem,
  ProjectsGridNumber,
  ProjectsGridRoles,
  ProjectsGridTitle,
  ProjectsGridYear,
};
