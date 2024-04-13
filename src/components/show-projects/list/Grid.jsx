import ProjectsGrid from '../../projects/grid';

const ShowProjectsItemsGrid = ({ className, data = [], ...props }) => {
  return (
    <ProjectsGrid {...props}>
      {data.map((data, i) => (
        <ProjectsGrid.Item
          href={`/projects/${data.slug}`}
          idx={i}
          key={data.slug}
        >
          <ProjectsGrid.Number idx={i} />

          <ProjectsGrid.Image idx={i} />

          <ProjectsGrid.Title text={data.title} />

          <ProjectsGrid.Roles data={data.roles} />

          <ProjectsGrid.Year>{data.year}</ProjectsGrid.Year>
        </ProjectsGrid.Item>
      ))}
    </ProjectsGrid>
  );
};

export default ShowProjectsItemsGrid;
