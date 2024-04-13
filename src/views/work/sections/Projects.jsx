import { Button, ScrollTitle, Section, TextScrollAnimate } from '@/components';
import { ShowProjectsList } from '@/components/show-projects';
import { Icon, Text } from '@/components/ui';
import { cn, normProjects } from '@/utils';

const WorkViewProjectsSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col items-center justify-center', className)}
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

      {(data.subtitle || data.description) && (
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
            <section className='flex grow basis-0 flex-col items-center sm:ml-auto sm:max-w-lg sm:items-start'>
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
      )}

      <WorkViewProjectsSectionBlock
        className='mt-lg'
        data={data.block}
      />
    </Section>
  );
};

const WorkViewProjectsSectionBlock = ({ data = {}, className, ...props }) => {
  const { action = {} } = data;

  const items = normProjects(data.items)

  return (
    <section
      className={cn(
        'flex w-9/10 max-w-screen-lg flex-col items-center',
        className,
      )}
      {...props}
    >
      <ShowProjectsList images={items.images}>
        <ShowProjectsList.Table
          className='max-sm:hidden'
          data={items.data}
        />

        <ShowProjectsList.Grid
          className='sm:hidden'
          data={items.data}
        />
      </ShowProjectsList>

      <Button.Magnetic
        className='mt-md'
        {...action.data}
      >
        <Icon {...action.icon} />
      </Button.Magnetic>
    </section>
  );
};

export default WorkViewProjectsSection;
