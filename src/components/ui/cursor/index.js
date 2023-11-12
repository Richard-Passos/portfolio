import CursorArea from './Area';
import CursorContent from './Content';
import CursorHover from './Hover';
import CursorRoot from './Root';

const Cursor = CursorRoot;

Cursor.Area = CursorArea;
Cursor.Content = CursorContent;
Cursor.Hover = CursorHover;

export default Cursor;
export { CursorRoot as Cursor, CursorArea, CursorContent, CursorHover };
