import ShowProjectsContent from './Content';
import ShowProjectsEmpty from './Empty';
import ShowProjectsLastPage from './LastPage';
import ShowProjectsLoadMore from './LoadMore';
import ShowProjectsRoot from './Root';
import ShowProjectsList from './list';
import ShowProjectsRoles from './roles';
import ShowProjectsTypes from './types';

const ShowProjects = ShowProjectsRoot;

ShowProjects.Content = ShowProjectsContent;
ShowProjects.Empty = ShowProjectsEmpty;
ShowProjects.LastPage = ShowProjectsLastPage;
ShowProjects.LoadMore = ShowProjectsLoadMore;
ShowProjects.List = ShowProjectsList;
ShowProjects.Roles = ShowProjectsRoles;
ShowProjects.Types = ShowProjectsTypes;

export default ShowProjects;
export {
  ShowProjectsRoot as ShowProjects,
  ShowProjectsContent,
  ShowProjectsEmpty,
  ShowProjectsLastPage,
  ShowProjectsLoadMore,
  ShowProjectsList,
  ShowProjectsRoles,
  ShowProjectsTypes,
};
