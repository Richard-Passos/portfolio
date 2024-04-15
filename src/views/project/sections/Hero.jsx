import { Button, ScrollAnimate, Section } from '@/components';
import { Icon, Image, Text } from '@/components/ui';
import { cn } from '@/utils';

const SCROLL_OFFSET = ['0 0', '.5 0'], 
ANIMATION_CONFIG = {
  y1: {
    scrollConfig: {
      offset: SCROLL_OFFSET
    },
    prop: 'y',
    propPoints: ['0%', '50%']
  },
  y2: {
    scrollConfig: {
      offset: SCROLL_OFFSET
    },
  prop: 'y',
  propPoints: ['80%', '0%'],
  },
  y3: {
    scrollConfig: {
      offset: SCROLL_OFFSET
    },
    prop: 'y',
    propPoints: ['-13%', '0%'],
    },
  clipPath: {
    scrollConfig: {
      offset: SCROLL_OFFSET
    },
  prop: 'clipPath',
  propPoints: ['inset(0 35% 0 35%)', 'inset(0 0% 0 0%)'],
  },
  scale: {
    scrollConfig: {
      offset: SCROLL_OFFSET
    },
    prop: 'scale',
    propPoints: [1.25, 1],
  }
};

const ProjectViewHeroSection = ({ className, project = {}, data = {}, ...props }) => {
  
  return (
    <Section
      forceHeaderTheme
      className={cn(
        '-mt-[--header-h] z-20 overflow-y-clip !min-h-[calc(var(--h)*1.5)] py-0 [--h:100svh] 2xl:[--h:--max-h]',
        className,
      )}
      {...props}
    >
      <ScrollAnimate.Transform config={ANIMATION_CONFIG.y1}>
      <div className='relative min-h-[--h] flex flex-col items-center justify-between pb-md pt-[calc(theme(spacing.md)+var(--header-h))]'>
      <Text.Title
          asChild
          className='text-center w-9/10 max-w-screen-lg'
          variants={{ size: 'xl' }}
        >
          <h1>{project.title}</h1>
        </Text.Title>

      <section className='mt-md flex w-9/10 max-w-screen-xl items-center justify-between'>
        {data.actions?.map((action) => 
        <Button
          {...action.data}
          href={`${action.data?.href}/${project.adjacentIds?.[action.type]}`}
        >
          <Button.Icon animation={action.animation}>
            <Icon {...action.icon} />
          </Button.Icon>

          <span className={cn(action.type?.toLowerCase() === 'next' && '-order-1')}>{action.data?.label}</span>
        </Button>)}
      </section>

      <ScrollAnimate.Transform config={ANIMATION_CONFIG.y2}>
      <div className='drop-shadow-[0_0_25px_hsl(var(--content)/.05)] absolute inset-0 z-10 pointer-events-none dark:drop-shadow-none'>
      <ScrollAnimate config={ANIMATION_CONFIG.clipPath}>
      <div className='size-full pointer-events-auto'>
        <ScrollAnimate.Transform config={ANIMATION_CONFIG.scale}>
        <div className='size-full relative overflow-hidden bg-muted'>
        <ScrollAnimate.Transform config={ANIMATION_CONFIG.y3}>
        <Image className='h-[115%] w-full object-cover' priority quality={100} {...project.thumbnail}/>
        </ScrollAnimate.Transform>
        </div>
        </ScrollAnimate.Transform>  
      </div>
      </ScrollAnimate>
      </div>
      </ScrollAnimate.Transform>
      </div>
      </ScrollAnimate.Transform>


      <div className='absolute top-0 h-[--header-h] w-screen max-w-bounds bg-main'>
        <span className='absolute left-1/2 top-full h-px w-[95%] -translate-x-1/2 bg-border opacity-60 dark:opacity-20' />
      </div>
    </Section>
  );
};

export default ProjectViewHeroSection;
