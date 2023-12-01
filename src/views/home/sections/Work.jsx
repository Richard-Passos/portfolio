import { PlusIcon } from '@radix-ui/react-icons';

import {
  ChangeTheme,
  ListHorizontalScroll,
  ListProjects,
  ScrollTitle,
  Section,
} from '@/components';
import { MagneticButton } from '@/components/button';
import { selectedProjects } from '@/constants';
import { cn } from '@/utils';

const HomeWorkSection = ({ className, theme, ...props }) => {
  const projects = selectedProjects.reduce(
    (obj, { img, ...item }) => ({
      img: [...obj.img, img],
      item: [...obj.item, item],
    }),
    { img: [], item: [] },
  );

  return (
    <Section
      className={cn(
        'relative flex flex-col items-center gap-20 md:gap-28 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      {...props}
    >
      <ScrollTitle title='WORK' />

      <ListProjects images={projects.img}>
        {projects.item.map((project, i) => (
          <ListProjects.Item
            index={i}
            key={project.href}
            {...project}
          />
        ))}
      </ListProjects>

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
            baseVelocity={i % 2 === 0 ? 3 : -3}
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
