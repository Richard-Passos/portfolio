import { getProjects } from '@/api';
import { Badge, Text } from '@/components/ui';
import { PlusIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

import Show from './show';

const ProjectsView = async ({ className, ...props }) => {
  const projects = (await getProjects()).results;

  return (
    <main
      className={cn(
        'dark-layout mx-auto flex max-w-bounds flex-col items-center gap-lg py-[min(28vh,theme(spacing.28))]',
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
          <PlusIcon aria-hidden />

          <span className='sr-only'>More projects</span>
        </Show.LoadMore>
      </Show>
    </main>
  );
};

export default ProjectsView;
