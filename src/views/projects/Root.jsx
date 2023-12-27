import { PlusIcon } from '@radix-ui/react-icons';

import { getProjects } from '@/api';
import { ChangeTheme } from '@/components';
import { Badge, Text } from '@/components/ui';
import { cn } from '@/utils';

import Show from './show';

const PROJECTS_VIEW_THEME = 'dark';

const ProjectsView = async ({ className, ...props }) => {
  const projects = (await getProjects()).results;
  console.log('-  projects   -', projects);

  return (
    <main
      className={cn(
        'mx-auto flex max-w-bounds flex-col items-center gap-lg py-[min(48vh,theme(spacing.48))]',
        className,
      )}
      {...props}
    >
      <Text.Title className='flex w-[90%] max-w-screen-lg flex-col text-[11vw] font-bold uppercase leading-none max-sm:items-center max-sm:text-center sm:text-[min(8vw,6rem)]'>
        Head turning{' '}
        <div className='relative w-fit'>
          projects{' '}
          <Badge className='absolute bottom-0 right-0 -translate-x-[12.5%] translate-y-1/4 -rotate-12 px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case'>
            Gotta see&apos;m all
          </Badge>
        </div>
      </Text.Title>

      <Show>
        <div className='flex w-full flex-wrap-reverse items-center justify-center gap-5 gap-x-10 sm:justify-between'>
          <Show.Roles /> <Show.Types />
        </div>

        <Show.Content initialData={projects} />

        <Show.LoadMore>
          <PlusIcon
            aria-hidden
            className='h-[40%] w-[40%]'
          />

          <span className='sr-only'>More projects</span>
        </Show.LoadMore>
      </Show>

      <ChangeTheme
        className='pointer-events-none absolute top-0 h-1/2 max-h-screen w-full'
        theme={PROJECTS_VIEW_THEME}
      >
        <span />
      </ChangeTheme>

      <ChangeTheme
        className='pointer-events-none absolute bottom-0 h-1/2 max-h-screen w-full'
        theme={PROJECTS_VIEW_THEME}
      >
        <span />
      </ChangeTheme>
    </main>
  );
};

export default ProjectsView;
