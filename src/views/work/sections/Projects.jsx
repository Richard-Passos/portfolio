import { PlusIcon } from '@radix-ui/react-icons';

import {
  Bg,
  Lines,
  Projects,
  ScrollTitle,
  TextScrollAnimation,
} from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { selectedProjects } from '@/constants';
import { cn } from '@/utils';

const WorkViewProjectsSection = ({ theme, className, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center pb-lg',
        theme,
        className,
      )}
      {...props}
    >
      <h2 className='mb-md flex w-full flex-col'>
        <ScrollTitle title='SELECTED' />
        <ScrollTitle
          dir='rtl'
          title='WORKS'
        />
      </h2>

      <div className='mb-lg w-9/10 max-w-screen-lg'>
        <Text className='text-lg font-medium max-sm:text-center sm:ml-auto sm:max-w-xl md:text-xl'>
          <TextScrollAnimation text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo id vel recusandae a porro pariatur, aliquid, soluta placeat reprehenderit error velit dolor dicta laborum!' />
        </Text>
      </div>

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

      <Bg />

      <Lines />
    </section>
  );
};

const WorkViewProjectsShowSection = () => {
  const projects = selectedProjects.reduce(
    (obj, { img, ...data }) => ({
      data: [...obj.data, data],
      images: [...obj.images, img],
    }),
    { data: [], images: [] },
  );

  return (
    <Projects
      className='w-full'
      images={projects.images}
    >
      <Projects.List className='max-sm:hidden'>
        {projects.data.map((project, i) => (
          <Projects.List.Item
            href={project.href}
            index={i}
            key={'projects-list-' + project.href}
          >
            <Projects.List.Number index={i} />

            <Projects.List.Content>
              <Projects.List.Title text={project.title} />

              <Projects.List.Roles data={project.roles} />
            </Projects.List.Content>
          </Projects.List.Item>
        ))}
      </Projects.List>

      <Projects.Grid className='sm:hidden'>
        {projects.data.map((project, i) => (
          <Projects.Grid.Item
            index={i}
            key={'projects-grid-' + project.href}
          >
            <Projects.Grid.Link href={project.href}>
              <Projects.Grid.Number index={i} />

              <Projects.Grid.Image index={i} />

              <Projects.Grid.Title text={project.title} />
            </Projects.Grid.Link>

            <Projects.Grid.Roles data={project.roles} />
          </Projects.Grid.Item>
        ))}
      </Projects.Grid>
    </Projects>
  );
};

export default WorkViewProjectsSection;
