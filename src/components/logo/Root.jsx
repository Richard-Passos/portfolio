import { Link } from '../ui/link';
import { Svg } from '../ui/svg';

const Root = (props) => {
  return (
    <Link
      href='/'
      {...props}
    >
      <Svg.Logo />
    </Link>
  );
};

export default Root;
