import ProjectsShowContent from './Content';
import ProjectsShowLoadMore from './LoadMore';
import ProjectsShowRoles from './Roles';
import ProjectsShowRoot from './Root';
import ProjectsShowTypes from './Types';

const ProjectsShow = ProjectsShowRoot;

ProjectsShow.Content = ProjectsShowContent;
ProjectsShow.LoadMore = ProjectsShowLoadMore;
ProjectsShow.Roles = ProjectsShowRoles;
ProjectsShow.Types = ProjectsShowTypes;

export default ProjectsShow;
export {
  ProjectsShowRoot as ProjectsShow,
  ProjectsShowContent,
  ProjectsShowLoadMore,
  ProjectsShowRoles,
  ProjectsShowTypes,
};
