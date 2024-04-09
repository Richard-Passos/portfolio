import { projectsApi } from '@/api';
import { cn } from '@/utils';

import { MagneticButton } from '../button';
import HorizontalScroll from '../horizontal-scroll';
import { Image, Text } from '../ui';
import { ArrowUpIcon } from '../ui/icon/icons';

const NextProject = async ({ id, className, ...props }) => {
  const { data = {} } = await projectsApi.getOne(id);

  return (
    <section
      className={cn('w-full space-y-sm', className)}
      {...props}
    >
      <NextProjectLinkHeading />

      <div className='relative flex w-full flex-col items-center justify-center gap-[.2em] [clip-path:inset(-100%_0_0_0)]'>
        <MagneticButton
          className='peer absolute z-10 h-2/3 [&_svg]:size-[40%]'
          href={`/projects/${id}`}
          variants={{ color: 'main' }}
        >
          <ArrowUpIcon className='rotate-45' />
        </MagneticButton>

        <div className='group relative flex w-full justify-center'>
          <NextProjectLinkContent
            baseVelocity={-1}
            className='text-muted'
            text={data.title}
          />

          <Image
            className='absolute top-0 aspect-square w-9/10 max-w-screen-md rounded-3xl object-cover transition-[top] duration-500 [.peer:hover~.group_&]:-top-[100%]'
            {...data.thumbnail}
          />
        </div>

        <span className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-main/75' />

        <NextProjectLinkContent
          baseVelocity={1.5}
          className='relative z-10'
          text={data.title}
        />
      </div>

      <NextProjectLinkHeading
        aria-hidden
        className='first:[&>*]:order-2'
      />
    </section>
  );
};

const NextProjectLinkHeading = ({ className, ...props }) => {
  return (
    <div
      className={cn('mx-auto flex w-9/10 items-center gap-sm', className)}
      {...props}
    >
      <Text.Title className='shrink-0 text-xs uppercase'>
        Next project
      </Text.Title>

      <span className='h-px w-full bg-border' />
    </div>
  );
};

const NextProjectLinkContent = ({ className, variants, text, ...props }) => {
  return (
    <Text.Title
      aria-hidden
      asChild
      className={cn(
        'pointer-events-none font-bold [--gap:--font-blank-space]',
        className,
      )}
      variants={{ size: 'xl', ...variants }}
      {...props}
    >
      <HorizontalScroll>
        <span>{text}</span> ·
      </HorizontalScroll>
    </Text.Title>
  );
};

export default NextProject;
