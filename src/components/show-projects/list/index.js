import ShowProjectsListGrid from './Grid';
import ShowProjectsListRoot from './Root';
import ShowProjectsListTable from './Table';

const ShowProjectsList = ShowProjectsListRoot;

ShowProjectsList.Grid = ShowProjectsListGrid;
ShowProjectsList.Table = ShowProjectsListTable;

export default ShowProjectsList;
export {
  ShowProjectsListRoot as ShowProjectsList,
  ShowProjectsListGrid,
  ShowProjectsListTable,
};
