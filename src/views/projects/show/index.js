import ProjectsViewShowContent from './Content';
import ProjectsViewShowLoadMore from './LoadMore';
import ProjectsViewShowRoot from './Root';
import ProjectsViewShowRoles from './roles';
import ProjectsViewShowTypes from './types';

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
