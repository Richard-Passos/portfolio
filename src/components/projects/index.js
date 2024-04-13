import ProjectsRoot from './Root';
import ProjectsGrid from './grid';
import ProjectsTable from './table';

const Projects = ProjectsRoot;

Projects.Grid = ProjectsGrid;
Projects.Table = ProjectsTable;

export default Projects;
export { ProjectsRoot as Projects, ProjectsGrid, ProjectsTable };
