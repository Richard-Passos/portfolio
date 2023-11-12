import TableBody from './Body';
import TableCaption from './Caption';
import TableCell from './Cell';
import TableFooter from './Footer';
import TableHead from './Head';
import TableHeader from './Header';
import TableRoot from './Root';
import TableRow from './Row';

const Table = TableRoot;

Table.Body = TableBody;
Table.Caption = TableCaption;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;

export default Table;
export {
  TableRoot as Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
