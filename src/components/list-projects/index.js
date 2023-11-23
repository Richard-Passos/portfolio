import ListProjectsItem from './Item';
import ListProjectsRoot from './Root';

const ListProjects = ListProjectsRoot;

ListProjects.Item = ListProjectsItem;

export default ListProjects;
export { ListProjectsRoot as ListProjects, ListProjectsItem };
