import { Suspense } from 'react';

import { projectsApi } from '@/api';
import { DotsLoader, Lines } from '@/components';
import { MagneticButton } from '@/components/button';
import { Badge, Icon, Text } from '@/components/ui';
import { PlusIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

import Show from './show';

const ROLES = ['all', 'design', 'development'],
  TYPES = [
    { data: 'list', icon: 'List' },
    { data: 'grid', icon: 'Grid' },
  ];

const ProjectsView = async ({ className, ...props }) => {
  const { data = [] } = await projectsApi.get();

  return (
    <main
      className={cn(
        'dark-layout dark relative flex w-full max-w-bounds flex-col items-center gap-lg py-lg',
        className,
      )}
      {...props}
    >
      <Text.Title
        asChild
        className='w-9/10 max-w-screen-lg max-sm:text-center'
        variants={{ size: 'lg' }}
      >
        <h1>
          Head turning{' '}
          <span className='relative inline w-fit'>
            projects{' '}
            <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
              Gotta see&apos;m all
            </Badge>
          </span>
        </h1>
      </Text.Title>

      <Show
        defaultData={{ role: ROLES[0], type: TYPES[0].data, projects: data }}
      >
        <div className='flex w-full flex-wrap-reverse items-center justify-center gap-sm sm:justify-between'>
          <Show.Roles>
            {ROLES.map((role) => (
              <Show.Roles.Trigger
                key={role}
                role={role}
              >
                {role}
              </Show.Roles.Trigger>
            ))}
          </Show.Roles>

          <Show.Types>
            {TYPES.map(({ data, icon }) => (
              <Show.Types.Trigger
                aria-label={`Toggle to ${data}`}
                key={data}
                type={data}
              >
                <Icon
                  aria-hidden
                  name={icon}
                />
              </Show.Types.Trigger>
            ))}
          </Show.Types>
        </div>

        <Suspense fallback={<DotsLoader />}>
          <Show.Content />
        </Suspense>

        <Suspense
          fallback={
            <MagneticButton
              disabled
              variants={{ color: 'main' }}
            >
              <DotsLoader />
            </MagneticButton>
          }
        >
          <Show.LoadMore>
            <PlusIcon aria-hidden />

            <span className='sr-only'>More projects</span>
          </Show.LoadMore>
        </Suspense>
      </Show>

      <Lines />
      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-20' />
    </main>
  );
};

export default ProjectsView;
