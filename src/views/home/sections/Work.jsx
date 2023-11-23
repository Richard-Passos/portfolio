import { PlusIcon } from '@radix-ui/react-icons';

import {
  Button,
  ChangeTheme,
  ListHorizontalScroll,
  ListProjects,
  ScrollTitle,
  Section,
} from '@/components';
import { Text } from '@/components/ui/text';
import { selectedProjects } from '@/constants';
import { cn } from '@/utils';

const HomeWorkSection = ({ className, theme, ...props }) => {
  return (
    <Section
      className={cn(
        'relative flex flex-col items-center gap-24 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      {...props}
    >
      <ScrollTitle title='WORK' />

      <ListProjects>
        {selectedProjects.map((project, i) => (
          <ListProjects.Item
            index={i}
            key={project.href}
            {...project}
          />
        ))}
      </ListProjects>

      <Button
        className='relative -mt-12'
        href='/projects'
        isLink
      >
        <PlusIcon
          aria-hidden
          className='h-10 w-10'
        />

        <span className='sr-only'>More projects</span>
      </Button>

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
            baseVelocity={i % 2 === 0 ? 5 : -5}
            className='[&>div>div]:gap-8'
            key={content}
          >
            <Text className='outline-text mr-8 [-webkit-text-stroke-width:theme(spacing.px)]'>
              {content}
            </Text>

            <span className='aspect-square w-[.2em] rounded-full border border-current' />
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
