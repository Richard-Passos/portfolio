import { getProjects } from '@/api';
import { Lines } from '@/components';
import { Badge, Text } from '@/components/ui';
import { PlusIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

import Show from './show';

const ProjectsView = async ({ className, ...props }) => {
  const projects = (await getProjects()).results;

  return (
    <main
      className={cn(
        'dark-layout dark relative mx-auto flex max-w-bounds flex-col items-center gap-lg py-md',
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

      <Show>
        <div className='flex w-full flex-wrap-reverse items-center justify-center gap-5 gap-x-10 sm:justify-between'>
          <Show.Roles /> <Show.Types />
        </div>

        <Show.Content initialData={projects} />

        <Show.LoadMore>
          <PlusIcon aria-hidden />

          <span className='sr-only'>More projects</span>
        </Show.LoadMore>
      </Show>

      <Lines />
      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-20' />
    </main>
  );
};

export default ProjectsView;
