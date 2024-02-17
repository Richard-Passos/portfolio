import { cn } from '@/utils';

const SkillCardAction = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'relative isolate flex size-8 items-center justify-center overflow-hidden rounded-full bg-muted transition-colors [clip-path:circle(100%)] group-hover:text-primary-content',
        className,
      )}
      {...props}
    >
      {children}

      <div className='absolute inset-0 -z-10 translate-y-[101%] rounded-[50%_50%_0_0] transition-[transform,border-radius] duration-500 group-hover:translate-y-0 group-hover:rounded-[0]'>
        <span className='absolute inset-0 rounded-inherit bg-primary transition-bg' />
      </div>
    </div>
  );
};
export default SkillCardAction;
