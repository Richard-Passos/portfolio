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
        'relative flex flex-col items-center gap-lg 2xl:h-auto 2xl:max-h-none',
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

      <div className='flex w-[90%] max-w-screen-lg flex-col items-center gap-md'>
        <Text.Subtitle className='mr-auto text-xs uppercase text-muted-content'>
          Selected works
        </Text.Subtitle>

        <ShowProjects />

        <MagneticButton
          aria-label='More works'
          className='focus-visible:outline-variant-content'
          href='/projects'
          isLink
          variants={{ color: 'main' }}
        >
          <PlusIcon aria-hidden />
        </MagneticButton>
      </div>

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
      className={cn('flex w-full flex-col items-center gap-md', className)}
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

      <ListHorizontalScroll.Link href='/work'>
        Explore
      </ListHorizontalScroll.Link>
    </div>
  );
};

export default HomeWorkSection;
