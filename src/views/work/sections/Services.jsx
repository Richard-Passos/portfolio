import {
  Button,
  ScrollAnimate,
  ScrollTitle,
  Section,
  Services,
  TextScrollAnimate,
} from '@/components';
import { Icon, Image, Separator, Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  y1: {
    scrollConfig: { offset: ['1 1', '1 0'] },
    prop: '--y',
    propPoints: ['0%', '100%'],
  },
  y2: {
    prop: 'y',
    propPoints: ['-13%', '0%'],
  },
};

const WorkViewServicesSection = ({ className, data = {}, ...props }) => {
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

      <WorkViewServicesSectionBlock
        className='mt-lg'
        data={data.block}
      />
    </Section>
  );
};

const WorkViewServicesSectionBlock = ({ data = {}, className, ...props }) => {
  const { action = {} } = data;

  return (
    <section
      className={cn(
        'flex w-9/10 max-w-screen-lg flex-col items-center',
        className,
      )}
      {...props}
    >
      <Text.Subtitle className='mr-auto text-2xl font-medium'>
        {data.title}
      </Text.Subtitle>

      <div className='mt-md grid gap-md sm:grid-cols-2'>
        <ScrollAnimate config={ANIMATION_CONFIG.y1}>
          <div className='h-1/2 translate-y-[--y] overflow-hidden rounded-3xl bg-muted max-sm:hidden md:h-2/3 md:translate-y-[calc(var(--y)/2)]'>
            <ScrollAnimate.Transform config={ANIMATION_CONFIG.y2}>
              <Image
                className='h-[115%] w-full object-cover'
                {...data.image}
              />
            </ScrollAnimate.Transform>
          </div>
        </ScrollAnimate>

        <Services className='sm:py-md'>
          {data.items?.map((data, i) => (
            <Services.Item key={data.title}>
              <Services.Number idx={i} />

              <Separator />

              <Services.Title>{data.title}</Services.Title>

              <Services.Description>{data.description}</Services.Description>
            </Services.Item>
          ))}
        </Services>
      </div>

      <Button
        className='mt-md'
        {...action.data}
      >
        {action.data?.label}

        <Button.Icon animation={action.animation}>
          <Icon {...action.icon} />
        </Button.Icon>
      </Button>
    </section>
  );
};

export default WorkViewServicesSection;
