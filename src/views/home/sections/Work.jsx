import { projectsApi } from '@/api';
import {
  ListHorizontalScroll,
  Projects,
  ScrollTitle,
  Section,
  TextScrollAnimate,
} from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { PlusIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

const HomeViewWorkSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('relative flex flex-col items-center', className)}
      {...props}
    >
      <h2 className='mb-md flex w-full flex-col'>
        <ScrollTitle title='ABOUT' />
        <ScrollTitle
          dir='rtl'
          title='WORK'
        />
      </h2>

      <section className='mb-lg grid w-9/10 max-w-screen-xl gap-sm sm:grid-cols-2'>
        <Text className='text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-5xl/tight'>
          <TextScrollAnimate text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <Text className='text-muted-content max-sm:text-center sm:max-w-lg sm:justify-self-end'>
          We represent storytellers who shape culture and drive the future. From
          artists and creators to athletes and brands, our deep expertise and
          broad capabilities enable talent and companies to confidently grow
          their careers and businesses.
        </Text>
      </section>

      <div className='mb-lg flex w-9/10 max-w-screen-lg flex-col items-center gap-md'>
        <Text.Subtitle className='mr-auto text-xs uppercase text-muted-content'>
          Selected works
        </Text.Subtitle>

        <ShowProjects />

        <MagneticButton
          aria-label='More works'
          asLink
          href='/projects'
          variants={{ color: 'main' }}
        >
          <PlusIcon aria-hidden />
        </MagneticButton>
      </div>

      <ListWorkPage />
    </Section>
  );
};

const ShowProjects = async ({ className, ...props }) => {
  const selectedProjects = (await projectsApi.getSelecteds()).data || [];

  const projects = selectedProjects.reduce(
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

const ListWorkPage = ({ className, ...props }) => {
  const content = ['Mission', 'Soft & hard skills', 'Services'];

  return (
    <div
      className={cn('flex w-full flex-col items-center gap-md', className)}
      {...props}
    >
      <ListHorizontalScroll>
        {content.map((content, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
            className='[--gap:theme(spacing.4)]'
            key={content}
          >
            <span>{content}</span> ·{' '}
            <span className='opacity-30 dark:opacity-10'>{content}</span>{' '}
            <span className='opacity-30 dark:opacity-10'>·</span>{' '}
            <span className='opacity-30 dark:opacity-10'>{content}</span> ·
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll>

      <ListHorizontalScroll.Link href='/work'>
        Explore
      </ListHorizontalScroll.Link>
    </div>
  );
};

export default HomeViewWorkSection;
