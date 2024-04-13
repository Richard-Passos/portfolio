import ProjectsGrid from '../../projects/grid';

const ShowProjectsItemsGrid = ({ className, data = [], ...props }) => {
  return (
    <ProjectsGrid {...props}>
        {data.map((data, i) => (
          <ProjectsGrid.Item
            href={`/projects/${data.slug}`}
            index={i}
            key={data.slug}
          >
            <ProjectsGrid.Number index={i} />

            <ProjectsGrid.Image index={i} />

            <ProjectsGrid.Title text={data.title} />

            <ProjectsGrid.Roles data={data.roles} />

            <ProjectsGrid.Year>{data.year}</ProjectsGrid.Year>
          </ProjectsGrid.Item>
        ))}
      </ProjectsGrid>
  );
};

export default ShowProjectsItemsGrid;