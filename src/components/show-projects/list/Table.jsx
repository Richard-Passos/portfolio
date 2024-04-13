import ProjectsTable from '../../projects/table';

const ShowProjectsItemsTable = ({ className, data = [], ...props }) => {
  return (
    <ProjectsTable {...props} >
        {data.map((data, i) => (
          <ProjectsTable.Item
            href={`/projects/${data.slug}`}
            index={i}
            key={data.slug}
          >
            <ProjectsTable.Number index={i} />

            <ProjectsTable.Content>
              <ProjectsTable.Title text={data.title} />

              <ProjectsTable.Roles data={data.roles} />

              <ProjectsTable.Year>{data.year}</ProjectsTable.Year>
            </ProjectsTable.Content>
          </ProjectsTable.Item>
        ))}

        <ProjectsTable.Images />
      </ProjectsTable>
  );
};

export default ShowProjectsItemsTable;