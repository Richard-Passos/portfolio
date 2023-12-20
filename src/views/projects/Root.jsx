import { Section } from '@/components';
import { Badge, Text } from '@/components/ui';
import { cn } from '@/utils';

import Show from './show';

const ProjectsView = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'mx-auto flex max-w-bounds flex-col items-center gap-lg py-[min(48vh,theme(spacing.48))] 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      {...props}
      asChild
      theme='dark'
    >
      <main>
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

          <Show.Content />
        </Show>
      </main>
    </Section>
  );
};

export default ProjectsView;
