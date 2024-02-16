import ProjectsViewShowContent from './Content';
import ProjectsViewShowLoadMore from './LoadMore';
import ProjectsViewShowRoles from './Roles';
import ProjectsViewShowRoot from './Root';
import ProjectsViewShowTypes from './Types';

const ProjectsViewShow = ProjectsViewShowRoot;

ProjectsViewShow.Content = ProjectsViewShowContent;
ProjectsViewShow.LoadMore = ProjectsViewShowLoadMore;
ProjectsViewShow.Roles = ProjectsViewShowRoles;
ProjectsViewShow.Types = ProjectsViewShowTypes;

export default ProjectsViewShow;
export {
  ProjectsViewShowRoot as ProjectsViewShow,
  ProjectsViewShowContent,
  ProjectsViewShowLoadMore,
  ProjectsViewShowRoles,
  ProjectsViewShowTypes,
};
