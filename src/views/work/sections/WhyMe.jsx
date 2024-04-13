import {
  Button,
  ScrollTitle,
  Section,
  Stats,
  TextScrollAnimate,
} from '@/components';
import { Icon, Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkViewWhyMeSection = ({ className, data = {}, ...props }) => {
  const { action = {} } = data;

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

      <WorkViewWhyMeSectionBlock
        className='mt-lg'
        data={data.block}
      />
    </Section>
  );
};

const WorkViewWhyMeSectionBlock = ({ className, data = {}, ...props }) => {
  return (
    <section
      className={cn('w-9/10 max-w-screen-lg', className)}
      {...props}
    >
      <Text.Subtitle className='text-2xl font-medium'>
        {data.title}
      </Text.Subtitle>

      <Stats className='mt-md'>
        {data.items?.map((data) => (
          <Stats.Item key={data.title}>
            <Stats.Title>{data.title}</Stats.Title>

            <Stats.Description>{data.description}</Stats.Description>
          </Stats.Item>
        ))}
      </Stats>
    </section>
  );
};

export default WorkViewWhyMeSection;
