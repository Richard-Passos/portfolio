import { projectsApi } from '@/api';
import { Projects, ScrollTitle, Section } from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { PlusIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

const WorkViewProjectsSection = ({ className, ...props }) => {
  return (
    <Section
      hasTransition={false}
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <h2 className='mb-md flex w-full flex-col'>
        <ScrollTitle title='SELECTED' />
        <ScrollTitle
          dir='rtl'
          title='WORKS'
        />
      </h2>

      <section className='mb-lg grid w-9/10 max-w-screen-xl gap-sm sm:grid-cols-2'>
        <Text className='text-muted-content max-sm:text-center sm:col-end-3 sm:max-w-lg sm:justify-self-end'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          dolores adipisci voluptates dolore inventore aperiam rerum possimus
          culpa nemo molestiae!
        </Text>
      </section>

      <div className='flex w-9/10 max-w-screen-lg flex-col items-center gap-md'>
        <WorkViewProjectsShowSection />

        <MagneticButton
          aria-label='More works'
          asLink
          href='/projects'
          variants={{ color: 'main' }}
        >
          <PlusIcon aria-hidden />
        </MagneticButton>
      </div>
    </Section>
  );
};

const WorkViewProjectsShowSection = async () => {
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
      className='w-full'
      images={projects.images}
    >
      <Projects.List className='max-sm:hidden'>
        {projects.data.map((data, i) => (
          <Projects.List.Item
            href={`/projects/${data.slug}`}
            index={i}
            key={'projects-list-' + data.title}
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
            key={'projects-grid-' + data.title}
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

export default WorkViewProjectsSection;
