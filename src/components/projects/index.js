import ProjectsRoot from './Root';
import ProjectsGrid from './grid';
import ProjectsList from './list';

const Projects = ProjectsRoot;

Projects.Grid = ProjectsGrid;
Projects.List = ProjectsList;

export default Projects;
export { ProjectsRoot as Projects, ProjectsGrid, ProjectsList };
