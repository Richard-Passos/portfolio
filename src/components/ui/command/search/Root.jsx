import { cn } from '@/utils';

const CommandSearch = ({ className, ...props }) => {
  return (
    <div
      aria-label='Search input'
      className={cn(
        'relative flex items-center overflow-hidden rounded-t-inherit border-b',
      )}
      {...props}
    />
  );
};

export default CommandSearch;
