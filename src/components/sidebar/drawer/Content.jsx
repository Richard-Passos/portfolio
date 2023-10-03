import { cn } from '@/utils';

const Content = ({ className, ...props }) => {
  return (
    <section
      aria-label='Content'
      className={cn('group-peer-checked:flex relative z-10 hidden', className)}
      {...props}
    />
  );
};

export default Content;
