import ProjectsTable from '../../projects/table';

const ShowProjectsListTable = ({ data = [], ...props }) => {
  return (
    <ProjectsTable {...props}>
      {data.map((data, i) => (
        <ProjectsTable.Item
          href={`projects/${data.slug}`}
          idx={i}
          key={data.slug}
        >
          <ProjectsTable.Number idx={i} />

          <ProjectsTable.Content>
            <ProjectsTable.Title text={data.title} />

            <ProjectsTable.Roles data={data.roles} />

            {data.year && <ProjectsTable.Year>{data.year}</ProjectsTable.Year>}
          </ProjectsTable.Content>
        </ProjectsTable.Item>
      ))}

      <ProjectsTable.Images />
    </ProjectsTable>
  );
};

export default ShowProjectsListTable;
