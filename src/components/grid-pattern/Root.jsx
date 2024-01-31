import { cn } from '@/utils';

const GridPattern = ({ cols = 14, rows = 7, className, style, ...props }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 grid grid-cols-[repeat(var(--cols),minmax(0,1fr))] grid-rows-[repeat(var(--rows),minmax(0,1fr))]',
        className,
      )}
      style={{
        '--cols': cols,
        '--rows': rows,
        ...style,
      }}
      {...props}
    >
      {[...Array(cols * rows)].map((_, i) => (
        <span
          className='relative left-px top-px -ml-px -mt-px border opacity-60 transition-all dark:opacity-30'
          key={i}
        />
      ))}
    </div>
  );
};

export default GridPattern;
