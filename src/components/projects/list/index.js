import ProjectsListItem from './Item';
import ProjectsListRoot from './Root';

const ProjectsList = ProjectsListRoot;

ProjectsList.Item = ProjectsListItem;

export default ProjectsList;
export { ProjectsListRoot as ProjectsList, ProjectsListItem };
