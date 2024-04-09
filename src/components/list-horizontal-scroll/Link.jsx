import Button from '../button';
import { ArrowUpIcon } from '../ui/icon/icons';

const ListHorizontalScrollLink = ({ variants, children, ...props }) => {
  return (
    <Button
      variants={{ color: 'main', ...variants }}
      {...props}
    >
      {children}

      <Button.Icon animation='slideUpRight'>
        <ArrowUpIcon className='rotate-45' />
      </Button.Icon>
    </Button>
  );
};

export default ListHorizontalScrollLink;
