import ProjectsTableContent from './Content';
import ProjectsTableImages from './Images';
import ProjectsTableItem from './Item';
import ProjectsTableNumber from './Number';
import ProjectsTableRoles from './Roles';
import ProjectsTableRoot from './Root';
import ProjectsTableTitle from './Title';
import ProjectsTableYear from './Year';

const ProjectsTable = ProjectsTableRoot;

ProjectsTable.Content = ProjectsTableContent;
ProjectsTable.Images = ProjectsTableImages;
ProjectsTable.Item = ProjectsTableItem;
ProjectsTable.Number = ProjectsTableNumber;
ProjectsTable.Roles = ProjectsTableRoles;
ProjectsTable.Title = ProjectsTableTitle;
ProjectsTable.Year = ProjectsTableYear;

export default ProjectsTable;
export {
  ProjectsTableRoot as ProjectsTable,
  ProjectsTableContent,
  ProjectsTableImages,
  ProjectsTableItem,
  ProjectsTableNumber,
  ProjectsTableRoles,
  ProjectsTableTitle,
  ProjectsTableYear,
};
