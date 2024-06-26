import { BentoGrid, Button, HorizontalScroll, Section } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Icon, Image, Separator, Text } from '@/components/ui';
import { cn, normId, normTemplates } from '@/utils';

const ANIMATION_CONFIG = {
  prop: 'y',
  propPoints: ['-13%', '0%'],
};

const ProjectViewHeroSection = ({
  project = {},
  data = {},
  className,
  ...props
}) => {
  const infoDescriptions = [
      project.roles?.join(' & '),
      project.client,
      project.year,
    ],
    objectiveDescriptions = [project.challenge, project.solution];

  const infoItems = data.infoItems?.map((data, i) => ({
      ...data,
      description: infoDescriptions[i],
    })),
    objectiveItems = data.objectiveItems?.map((data, i) => ({
      ...data,
      description: objectiveDescriptions[i],
    }));

  return (
    <Section
      forceTheme
      className={cn(
        '-mt-[--header-h] flex min-h-svh flex-col items-center justify-center pt-[calc(theme(spacing.lg)+var(--header-h))]',
        className,
      )}
      {...props}
    >
      <div className='grid w-9/10 max-w-screen-lg gap-md md:grid-cols-4'>
        <div className='top-md h-fit md:sticky'>
          <Text.Title
            asChild
            variants={{ size: 'xl' }}
            className='font-bold md:text-2xl'
          >
            <h1>{project.title}</h1>
          </Text.Title>

          <ul className='mt-sm space-y-sm md:mt-4 md:max-w-52 md:space-y-2'>
            {infoItems?.map((data) => (
              <li
                className='grid w-full gap-x-sm gap-y-1.5 lg:grid-cols-3'
                key={data.title}
              >
                <Text.Subtitle className='text-xs uppercase text-muted-content'>
                  {data.title}:
                </Text.Subtitle>

                <Separator className='md:hidden' />

                <Text className='text-sm font-semibold capitalize lg:col-span-2'>
                  {data.description}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className='md:col-span-3'>
          <Text.Title
            variants={{ size: 'lg' }}
            className='font-medium normal-case first-letter:uppercase md:font-semibold'
          >
            {project.subtitle}
          </Text.Title>

          <Text className='mt-4 max-w-2xl font-medium leading-relaxed md:text-lg/relaxed'>
            {project.description}
          </Text>

          <section className='mt-md flex items-center justify-center gap-sm'>
            {data.actions?.map((action = {}) =>
              normId(action.type) === 'magnetic' ? (
                <Button.Magnetic
                  key={action.data?.label}
                  disabled={!project.url}
                  href={project.href}
                  {...action.data}
                >
                  <Icon {...action.icon} />
                </Button.Magnetic>
              ) : (
                <Button
                  className={cn(
                    (normId(action.type) === 'next' ||
                      normId(action.type) === 'prev') &&
                      'max-sm:hidden',
                  )}
                  key={action.data?.label}
                  {...action.data}
                  href={`${action.data?.href}/${project.adjacentIds?.[action.type]}`}
                >
                  <Button.Icon animation={action.animation}>
                    <Icon {...action.icon} />
                  </Button.Icon>

                  <span
                    className={cn(normId(action.type) === 'next' && '-order-1')}
                  >
                    {action.data?.label}
                  </span>
                </Button>
              ),
            )}
          </section>

          <ul className='mt-md grid aspect-video grid-cols-3 gap-xs'>
            {project.demoImages?.map((data = {}) => (
              <li
                key={data.src}
                className='overflow-hidden rounded-3xl bg-muted first:col-span-2'
              >
                <ScrollAnimateTransform config={ANIMATION_CONFIG}>
                  <Image
                    className='h-[115%] w-full object-cover'
                    {...data}
                  />
                </ScrollAnimateTransform>
              </li>
            ))}
          </ul>

          <ul className='mt-md flex max-w-screen-sm flex-col gap-md sm:ml-auto'>
            {objectiveItems?.map((data) => (
              <li key={data.title}>
                <Text.Subtitle className='uppercase'>
                  {data.title}
                </Text.Subtitle>

                <Text className='mt-sm text-xl text-muted-content first-letter:uppercase'>
                  {data.description}
                </Text>
              </li>
            ))}
          </ul>

          <ProjectViewHeroSectionGrid
            className='mt-lg'
            data={project.images}
          />
        </div>
      </div>

      <HorizontalScroll
        aria-hidden
        baseVelocity={1.5}
        className='sticky bottom-0 -z-10 -mt-[--h] flex h-[--h] w-full text-[min(16vw,calc(var(--max-w)*.16))] font-bold uppercase -tracking-widest text-muted [--h:100vh] 2xl:[--h:--max-h]'
      >
        {project.title} ·&nbsp;
      </HorizontalScroll>
    </Section>
  );
};

const ProjectViewHeroSectionGrid = ({
  className,
  data = {},
  style,
  ...props
}) => {
  return (
    <BentoGrid
      className={cn('w-full gap-sm', className)}
      style={{
        ...normTemplates(data.templates),
        ...style,
      }}
      {...props}
    >
      {data.items?.map(({ aspectRatio, data }, i) => (
        <BentoGrid.ScrollAnimate key={data.src}>
          <BentoGrid.Item.Image
            idx={i}
            data={data}
            className='rounded-3xl'
            style={{ aspectRatio }}
          />
        </BentoGrid.ScrollAnimate>
      ))}
    </BentoGrid>
  );
};

export default ProjectViewHeroSection;
