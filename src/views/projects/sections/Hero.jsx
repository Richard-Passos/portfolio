import { Suspense } from 'react';

import { DotsLoader, Section, ShowProjects } from '@/components';
import { MagneticButton } from '@/components/button';
import { Badge, Icon } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

const ProjectsHeroSection = async ({ className, data = {}, ...props }) => {
  return (
    <Section
      forceTheme
      className={cn(
        '-mt-[--header-h] flex min-h-svh w-9/10 max-w-screen-lg flex-col items-center justify-center pt-[calc(theme(spacing.lg)+var(--header-h))]',
        className,
      )}
      {...props}
    >
      <TextTitle
        asChild
        aria-label={data.title}
        className='mr-auto whitespace-pre-line'
        variants={{ size: 'lg' }}
      >
        <h1>
          {data.title?.split(' ').map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span
                key={i}
                className='relative inline'
              >
                {w}

                <Badge className='absolute bottom-0 right-0 w-max -translate-x-4 -rotate-12 border-variant-content px-[1em] py-[.75em] text-[.24em] lowercase tracking-normal first-letter:uppercase max-sm:translate-y-1/3 sm:text-[.17em]'>
                  {data.subtitle}
                </Badge>
              </span>
            ) : (
              `${w} `
            ),
          )}
        </h1>
      </TextTitle>
      <span className='sr-only'>{data.subtitle}</span>
      <ProjectsHeroSectionBlock
        className='mt-md'
        data={data.block}
      />
      <div className='absolute top-0 h-[--header-h] w-screen max-w-bounds bg-main'>
        <span className='absolute left-1/2 top-full h-px w-[95%] -translate-x-1/2 bg-border opacity-60 dark:opacity-20' />
      </div>{' '}
    </Section>
  );
};

const ProjectsHeroSectionBlock = ({ data = {}, ...props }) => {
  const { items = [], types = [], roles = [], action = {} } = data;

  return (
    <ShowProjects
      defaultState={{ items, type: types[0]?.type }}
      {...props}
    >
      <div className='flex w-full justify-between gap-sm max-sm:flex-col-reverse sm:items-center'>
        <ShowProjects.Roles>
          <Suspense fallback={<DotsLoader />}>
            {roles.map(({ type, data }) => (
              <ShowProjects.Roles.Trigger
                key={type}
                role={type}
              >
                {data.label}
              </ShowProjects.Roles.Trigger>
            ))}
          </Suspense>
        </ShowProjects.Roles>

        <ShowProjects.Types>
          {types.map(({ type, icon, data }) => (
            <ShowProjects.Types.Trigger
              key={data.label}
              type={type}
              asChild
            >
              <MagneticButton
                className='data-active:theme-primary hover:z-10 data-active:focus-visible:outline-primary-content [&_svg]:size-[40%]'
                {...data}
                variants={{ color: 'main', size: 'sm', ...data.variants }}
              >
                <Icon {...icon} />
              </MagneticButton>
            </ShowProjects.Types.Trigger>
          ))}
        </ShowProjects.Types>
      </div>

      <Suspense fallback={<DotsLoader />}>
        <ShowProjects.Content />
      </Suspense>

      <ShowProjects.Empty>{data.emptyText}</ShowProjects.Empty>

      <Suspense
        fallback={
          <MagneticButton
            disabled
            {...action.data}
          >
            <DotsLoader />
          </MagneticButton>
        }
      >
        <ShowProjects.LoadMore asChild>
          <MagneticButton {...action.data}>
            <Icon
              className='group-data-[state=loading]:hidden'
              {...action.icon}
            />

            <DotsLoader className='group-data-[state=loaded]:hidden' />
          </MagneticButton>
        </ShowProjects.LoadMore>
      </Suspense>

      <ShowProjects.LastPage>{data.lastPageText}</ShowProjects.LastPage>
    </ShowProjects>
  );
};

export default ProjectsHeroSection;
