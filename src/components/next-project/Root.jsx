import { cn } from '@/utils';

import { MagneticButton } from '../button';
import HorizontalScroll from '../horizontal-scroll';
import { Image, Text } from '../ui';
import { ArrowUpIcon } from '../ui/icon/icons';
import { projectsApi } from '@/api';

const NextProject = async ({ id, className, ...props }) => {
  const {data = {}} = await projectsApi.getOne(id)
  
  return (
    <section
      className={cn('w-full space-y-sm', className)}
      {...props}
    >
      <NextProjectLinkHeading />

      <div className='relative flex w-full flex-col items-center [clip-path:inset(-100%_0_0_0)] justify-center gap-[.2em]'>
      

      <MagneticButton
          asLink
          className='peer absolute !h-2/3 z-10 [&_svg]:size-[40%]'
          href={`/projects/${id}`}
          variants={{ color: 'main' }}
        >
          <ArrowUpIcon className='rotate-45' />
        </MagneticButton>

        <div className='group w-full flex justify-center relative'>
        <NextProjectLinkContent
          baseVelocity={-1}
          className='text-muted'
          text={data.title}
        />

        <Image className='rounded-3xl w-9/10 max-w-screen-md aspect-square absolute object-cover top-0 [.peer:hover~.group_&]:-top-[100%] transition-[top] duration-500' {...data.thumbnail}/>
        </div>


         <span className='absolute z-10 inset-0 bg-gradient-to-b pointer-events-none from-transparent via-transparent to-main/75'/>
        

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
      <Text.Title className='shrink-0 text-xs uppercase'>Next project</Text.Title>

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
