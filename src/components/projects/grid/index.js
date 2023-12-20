import ProjectsGridItem from './Item';
import ProjectsGridRoot from './Root';

const ProjectsGrid = ProjectsGridRoot;

ProjectsGrid.Item = ProjectsGridItem;

export default ProjectsGrid;
export { ProjectsGridRoot as ProjectsGrid, ProjectsGridItem };
