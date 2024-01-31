import { cn } from '@/utils';

import { ScrollAnimationTransform } from '../../scroll-animation';

const ProjectsGridItem = ({ className, children, ...props }) => {
  const animationConfig = {
    useScrollConfig: { offset: ['0 1', '0 .75'] },
    prop: '--y',
    propPoints: [0.15, 0],
  };

  return (
    <li
      className={cn(
        'w-full sm:w-[calc(50%_-_var(--gap)/2)] sm:even:ml-auto sm:[&:not(:first-child)>div]:-mt-[45%]',
        className,
      )}
      {...props}
    >
      <ScrollAnimationTransform config={animationConfig}>
        <div className='grid grid-cols-4 gap-6 sm:translate-y-[calc(var(--y)*100%)]'>
          {children}
        </div>
      </ScrollAnimationTransform>
    </li>
  );
};

export default ProjectsGridItem;
