import {
  Button,
  Projects,
  ScrollTitle,
  Section,
  TextScrollAnimate,
} from '@/components';
import { Icon, Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkViewProjectsSection = ({ className, data = {}, ...props }) => {
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

      <section className='mt-md flex w-9/10 max-w-screen-xl gap-sm max-sm:flex-col'>
        {data.subtitle && (
          <Text className='grow basis-0 text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-5xl/tight'>
            <TextScrollAnimate
              className='first:first-letter:uppercase'
              text={data.subtitle}
            />
          </Text>
        )}

        {data.description && (
          <section className='flex grow basis-0 flex-col items-center sm:items-start sm:ml-auto sm:max-w-lg'>
            <Text className='text-muted-content first-letter:uppercase max-sm:text-center'>
              {data.description}
            </Text>

            {data.action && (
              <Button
                className='mt-md'
                {...action.data}
              >
                {action.data?.label}

                <Button.Icon animation={action.animation}>
                  <Icon {...action.icon} />
                </Button.Icon>
              </Button>
            )}
          </section>
        )}
      </section>

      <WorkViewProjectsSectionBlock
        className='mt-lg'
        data={data.block}
      />
    </Section>
  );
};

const WorkViewProjectsSectionBlock = ({ data = {}, className, ...props }) => {
  const { action = {} } = data;

  return (
    <section
      className={cn(
        'flex w-9/10 max-w-screen-lg flex-col items-center',
        className,
      )}
      {...props}
    >
      <WorkViewProjectsSectionShow data={data.items} />

      <Button.Magnetic
        className='mt-md'
        {...action.data}
      >
        <Icon {...action.icon} />
      </Button.Magnetic>
    </section>
  );
};

const WorkViewProjectsSectionShow = ({ data = [], className, ...props }) => {
  const { items, images } = data.reduce(
    (obj, { thumbnail, ...data }) => ({
      items: [...obj.items, data],
      images: [...obj.images, thumbnail],
    }),
    { items: [], images: [] },
  );

  return (
    <Projects
      className={cn('w-full', className)}
      images={images}
      {...props}
    >
      <Projects.List className='max-sm:hidden'>
        {items.map((data, i) => (
          <Projects.List.Item
            href={`/projects/${data.slug}`}
            idx={i}
            key={'projects-list-' + data.title}
          >
            <Projects.List.Number idx={i} />

            <Projects.List.Content>
              <Projects.List.Title text={data.title} />

              <Projects.List.Roles data={data.roles} />
            </Projects.List.Content>
          </Projects.List.Item>
        ))}

        <Projects.List.Images />
      </Projects.List>

      <Projects.Grid className='sm:hidden'>
        {items.map((data, i) => (
          <Projects.Grid.Item
            href={`/projects/${data.slug}`}
            idx={i}
            key={'projects-grid-' + data.title}
          >
            <Projects.Grid.Number idx={i} />

            <Projects.Grid.Image idx={i} />

            <Projects.Grid.Title text={data.title} />

            <Projects.Grid.Roles data={data.roles} />
          </Projects.Grid.Item>
        ))}
      </Projects.Grid>
    </Projects>
  );
};

export default WorkViewProjectsSection;
