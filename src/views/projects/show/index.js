import ProjectsShowRoot from './Root';
import ProjectsShowContent from './Content';
import ProjectsShowTypes from './Types';
import ProjectsShowRoles from './Roles';

const ProjectsShow = ProjectsShowRoot

ProjectsShow.Content = ProjectsShowContent;
ProjectsShow.Roles = ProjectsShowRoles;
ProjectsShow.Types = ProjectsShowTypes;

export default ProjectsShow;
export {
ProjectsShowRoot as ProjectsShow,
ProjectsShowContent,
ProjectsShowRoles,
ProjectsShowTypes
}