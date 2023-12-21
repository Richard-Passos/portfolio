import { PlusIcon } from '@radix-ui/react-icons';

import {
  ChangeTheme,
  ListHorizontalScroll,
  Projects,
  ScrollTitle,
  Section,
  TextScrollAnimation,
} from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { selectedProjects } from '@/constants';
import { cn } from '@/utils';

const HomeWorkSection = ({ className, theme, ...props }) => {
  return (
    <Section
      className={cn(
        'relative mt-20 flex flex-col items-center gap-20 md:mt-28 md:gap-28 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      {...props}
    >
      <h2 className='flex w-full flex-col'>
        <ScrollTitle title='ABOUT' />
        <ScrollTitle
          dir='toLeft'
          title='WORK'
        />
      </h2>

      <div className='w-[90%] max-w-screen-xl'>
        <Text className='max-w-xl text-xl sm:ml-auto md:text-2xl'>
          <TextScrollAnimation
            className='max-sm:justify-center'
            text='Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and a commitment to transforming ideas into impactful, user-centric solutions.'
          />
        </Text>
      </div>

      <div className='w-[90%] max-w-screen-lg'>
        <Text.Small className='mb-10 text-xs uppercase md:mb-14'>
          Selected work
        </Text.Small>

        <ShowProjects />
      </div>

      <MagneticButton
        className='relative -mt-9'
        href='/projects'
        isLink
      >
        <PlusIcon
          aria-hidden
          className='h-1/2 w-1/2'
        />

        <span className='sr-only'>More projects</span>
      </MagneticButton>

      <ListWorkPage />

      <ChangeTheme
        className='pointer-events-none absolute left-0 top-0 h-1/2 max-h-screen w-full'
        theme={theme}
      >
        <span />
      </ChangeTheme>

      <ChangeTheme
        className='pointer-events-none absolute bottom-0 left-0 h-1/2 max-h-screen w-full'
        theme={theme}
      >
        <span />
      </ChangeTheme>
    </Section>
  );
};

const ShowProjects = () => {
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
            data={project}
            index={i}
            key={'projects-list-' + project.href}
          />
        ))}
      </Projects.List>

      <Projects.Grid className='sm:hidden'>
        {projects.data.map((project, i) => (
          <Projects.Grid.Item
            data={project}
            index={i}
            key={'projects-grid-' + project.href}
          />
        ))}
      </Projects.Grid>
    </Projects>
  );
};

const ListWorkPage = ({ className, ...props }) => {
  const content = ['Work method', 'Soft & hard skills', 'Projects'];

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center',
        className,
      )}
      {...props}
    >
      <ListHorizontalScroll>
        {content.map((content, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={i % 2 === 0 ? 2 : -2}
            className='[--gap:theme(spacing.8)]'
            key={content}
          >
            <span>{content}</span> •
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll>

      <ListHorizontalScroll.Link
        className='absolute'
        href='/work'
      >
        Explore
      </ListHorizontalScroll.Link>
    </div>
  );
};

export default HomeWorkSection;
