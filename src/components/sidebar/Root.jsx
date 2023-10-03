import { Toggle } from '../toggle';

const STATE_ID = 'sidebar-toggle';

const Root = ({ children, ...props }) => {
  return (
    <aside {...props}>
      <Toggle.State id={STATE_ID} />

      {children}
    </aside>
  );
};

export default Root;
export { STATE_ID };
