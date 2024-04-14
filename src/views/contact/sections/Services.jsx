import {
  Button,
  ScrollAnimate,
  ScrollTitle,
  Section,
  Services,
  TextScrollAnimate,
} from '@/components';
import '@/components/scroll-animate';
import { Icon, Image, Separator } from '@/components/ui';
import { Text } from '@/components/ui/text';
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
  rotate1: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '-360deg'],
    transformConfig: { clamp: false },
  },
  rotate2: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '360deg'],
    transformConfig: { clamp: false },
  },
};

const ContactViewServicesSection = async ({
  className,
  data = {},
  ...props
}) => {
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

      <ContactViewServicesSectionBlock
        className='mt-md'
        data={data.block}
      />
    </Section>
  );
};

const ContactViewServicesSectionBlock = ({
  className,
  data = {},
  ...props
}) => {
  return (
    <div
      className={cn(
        'grid w-9/10 max-w-screen-lg gap-md sm:grid-cols-2',
        className,
      )}
      {...props}
    >
      <div className='relative max-sm:hidden'>
        <ScrollAnimate config={ANIMATION_CONFIG.y1}>
          <div className='h-1/2 translate-y-[--y] overflow-hidden rounded-3xl bg-muted md:h-2/3 md:translate-y-[calc(var(--y)/2)]'>
            <ScrollAnimate.Transform config={ANIMATION_CONFIG.y2}>
              <Image
                className='h-[115%] w-full object-cover'
                {...data.image}
              />
            </ScrollAnimate.Transform>
          </div>
        </ScrollAnimate>

        <div className='absolute inset-0 -z-10'>
          {data.icons?.map((data, i) => (
            <ScrollAnimate.Transform
              key={data.src}
              config={ANIMATION_CONFIG[`rotate${i % 2 === 0 ? 1 : 2}`]}
            >
              <div className='absolute size-[min(30vmin,theme(maxWidth.xs))] first:bottom-0 first:left-0 last:right-0 last:top-0'>
                <Icon
                  className='size-full text-muted'
                  {...data}
                />
              </div>
            </ScrollAnimate.Transform>
          ))}
        </div>
      </div>

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
  );
};

export default ContactViewServicesSection;
