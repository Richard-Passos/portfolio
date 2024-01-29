'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

import { CursorLink } from '../../link';
import { ScrollAnimationTransform } from '../../scroll-animation';
import { Badge, Text } from '../../ui';
import { ArrowUpIcon } from '../../ui/icon/icons';
import Title from '../title';

const ProjectsListItem = ({ className, data, index, img, ...props }) => {
  const { setActiveIdx } = useContext(ProjectsContext);

  const animationConfig = {
    useScrollConfig: { offset: ['0 1', '3 1'] },
    prop: 'scaleX',
    scrollPoints: [0, 0.5, 1],
    propPoints: [1, 1.05, 1],
  };

  return (
    <ScrollAnimationTransform config={animationConfig}>
      <CursorLink
        className={cn(
          'group relative flex w-full justify-between gap-x-12 gap-y-6 overflow-hidden border-t p-12 no-underline last:border-b max-sm:px-6 lg:px-24',
          className,
        )}
        content={{
          name: 'Eye',
          className: 'w-[45%] h-[45%]',
        }}
        href={data.href}
        onMouseEnter={(ev) => {
          setActiveIdx(index);

          isFunctionThanCall(props.onMouseEnter, ev);
        }}
        {...props}
      >
        <section className='flex gap-4 overflow-hidden'>
          <Text className='translate-y-0.5 text-sm text-muted-content opacity-50 dark:opacity-20'>
            {`${index + 1}`.padStart(2, '0')}/
          </Text>

          <div className='space-y-1.5'>
            <Title
              className='text-4xl sm:text-5xl'
              text={data.title}
            />

            <div className='flex flex-wrap gap-1.5'>
              {data.roles
                .sort((a, b) => a.localeCompare(b))
                .map((role) => (
                  <Badge
                    className='lowercase [--variant:--muted-c]'
                    key={role}
                    variants={{ style: 'outline' }}
                  >
                    {role}
                  </Badge>
                ))}
            </div>
          </div>
        </section>

        <ArrowUpIcon className='shrink-0 -translate-x-full translate-y-full rotate-45 opacity-0 transition-[transform,opacity] duration-500 ease-backOut group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 max-sm:hidden' />

        <div className='absolute inset-0 -z-10 translate-y-full overflow-hidden transition-transform group-hover:translate-y-0 group-hover:duration-0'>
          <div className='h-full -translate-y-full transition-transform delay-150 group-hover:translate-y-0 group-hover:delay-0'>
            <span className='h-full w-full bg-muted transition-bg' />
          </div>
        </div>
      </CursorLink>
    </ScrollAnimationTransform>
  );
};

export default ProjectsListItem;
