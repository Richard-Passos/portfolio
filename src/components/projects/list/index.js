import ProjectsListContent from './Content';
import ProjectsListItem from './Item';
import ProjectsListNumber from './Number';
import ProjectsListRoles from './Roles';
import ProjectsListRoot from './Root';
import ProjectsListTitle from './Title';
import ProjectsListYear from './Year';

const ProjectsList = ProjectsListRoot;

ProjectsList.Content = ProjectsListContent;
ProjectsList.Item = ProjectsListItem;
ProjectsList.Number = ProjectsListNumber;
ProjectsList.Roles = ProjectsListRoles;
ProjectsList.Title = ProjectsListTitle;
ProjectsList.Year = ProjectsListYear;

export default ProjectsList;
export {
  ProjectsListRoot as ProjectsList,
  ProjectsListContent,
  ProjectsListItem,
  ProjectsListNumber,
  ProjectsListRoles,
  ProjectsListTitle,
  ProjectsListYear,
};
