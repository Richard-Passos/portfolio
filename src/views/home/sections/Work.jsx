import { projectsApi } from '@/api';
import {
  Button,
  ListHorizontalScroll,
  Projects,
  ScrollTitle,
  Section,
  TextScrollAnimate,
} from '@/components';
import { Icon, Text } from '@/components/ui';
import { cn } from '@/utils';

const HomeViewWorkSection = ({ className, data = {}, ...props }) => {
  const { block = {} } = data

  return (
    <Section
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <h2 className='w-full'>
        {data.title?.map((w, i) => (
          <ScrollTitle
            dir={i % 2 === 0 ? 'ltr' : 'rtl'}
            key={i}
            title={w}
          />
        ))}
      </h2>

      <section className='mt-md grid w-9/10 max-w-screen-xl gap-sm sm:grid-cols-2'>
        <Text className='text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-5xl/tight'>
          <TextScrollAnimate
            className='first:first-letter:uppercase'
            text={data.subtitle}
          />
        </Text>

        <Text className='text-muted-content first-letter:uppercase max-sm:text-center sm:max-w-lg sm:justify-self-end'>
          {data.description}
        </Text>
      </section>

      <div className='mt-lg flex w-9/10 max-w-screen-lg flex-col items-center'>
        <Text.Subtitle className='text-xs uppercase text-muted-content'>
          {block.title}
        </Text.Subtitle>

        <HomeViewWorkSectionProjects className='mt-md' />

        <Button.Magnetic
        className='mt-md'
          {...block.action}
        >
          <Icon aria-hidden {...block.action?.icon} />
        </Button.Magnetic>
      </div>

      <HomeViewWorkSectionList data={data.list} className='mt-lg' />
    </Section>
  );
};

const HomeViewWorkSectionProjects = async ({ className, ...props }) => {
  const { data = {} } = await projectsApi.getSelecteds()

  const projects = data.reduce(
    (obj, { thumbnail, ...data }) => ({
      data: [...obj.data, data],
      images: [...obj.images, thumbnail],
    }),
    { data: [], images: [] },
  );

  return (
    <Projects
      className={cn('w-full', className)}
      images={projects.images}
      {...props}
    >
      <Projects.List className='max-sm:hidden'>
        {projects.data.map((data, i) => (
          <Projects.List.Item
            href={`/projects/${data.slug}`}
            index={i}
            key={'projects-list-' + data.slug}
          >
            <Projects.List.Number index={i} />

            <Projects.List.Content>
              <Projects.List.Title text={data.title} />

              <Projects.List.Roles data={data.roles} />
            </Projects.List.Content>
          </Projects.List.Item>
        ))}

        <Projects.List.Images />
      </Projects.List>

      <Projects.Grid className='sm:hidden'>
        {projects.data.map((data, i) => (
          <Projects.Grid.Item
            href={`/projects/${data.slug}`}
            index={i}
            key={'projects-grid-' + data.slug}
          >
            <Projects.Grid.Number index={i} />

            <Projects.Grid.Image index={i} />

            <Projects.Grid.Title text={data.title} />

            <Projects.Grid.Roles data={data.roles} />
          </Projects.Grid.Item>
        ))}
      </Projects.Grid>
    </Projects>
  );
};

const HomeViewWorkSectionList = ({ className, data = {}, ...props }) => {
  const { action = {} } = data

  return (
    <div
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    >
      <ListHorizontalScroll>
        {data.items?.map((data, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
            className='[--gap:theme(spacing.4)]'
            key={data}
          >
            <span>{data}</span> ·{' '}
            <span className='opacity-30 dark:opacity-10'>{data}</span>{' '}
            <span className='opacity-30 dark:opacity-10'>·</span>{' '}
            <span className='opacity-30 dark:opacity-10'>{data}</span> ·
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll>

      <Button
      {...action.data}
    >
      {action.data?.label}

      <Button.Icon animation={action.animation}>
        <Icon {...action.icon} />
      </Button.Icon>
    </Button>
    </div>
  );
};

export default HomeViewWorkSection;
