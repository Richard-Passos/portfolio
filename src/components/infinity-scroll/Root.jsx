import { cn } from '@/utils';

const InfinityScroll = ({
  as,
  direction = 'toRight',
  className,
  children,
  ...props
}) => {
  const Tag = as ?? 'div';

  const directions = {
    toLeft: '[--initial-x:0%] [--final-x:-50%]',
    toRight: '[--initial-x:-50%] [--final-x:0%]',
  };

  return (
    <div className='w-full overflow-hidden'>
      <Tag
        className={cn(
          'relative flex w-fit animate-scroll-x items-center gap-[--gap] whitespace-nowrap first:[&>*]:ml-[--gap]',
          directions[direction],
          className,
        )}
        {...props}
      >
        {children}

        {children}
      </Tag>
    </div>
  );
};

export default InfinityScroll;
