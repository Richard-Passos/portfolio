import { Button, ScrollTitle, Section, TextScrollAnimate } from '@/components';
import { ScrollAnimate } from '@/components/scroll-animate';
import { Icon, Image, Separator, Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  y: {
    prop: 'y',
    propPoints: ['-13%', '0%'],
  },
  rotate: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: '--rotate',
    propPoints: ['0deg', '360deg'],
    transformConfig: { clamp: false },
  },
};

const AboutViewBackgroundSection = ({ className, data = {}, ...props }) => {
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
            <Text className='grow basis-0 text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-[2.75rem]/tight'>
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

      {data.blocks?.map((data, i) => (
        <AboutViewBackgroundSectionBlock
          key={i}
          className='mt-lg'
          data={data}
        />
      ))}
    </Section>
  );
};

const AboutViewBackgroundSectionBlock = ({
  className,
  data = {},
  ...props
}) => {
  return (
    <section
      className={cn(
        'group grid w-9/10 max-w-screen-lg gap-x-sm gap-y-md md:grid-cols-2 lg:gap-x-lg',
        className,
      )}
      {...props}
    >
      <ul className='space-y-md sm:py-md'>
        {data.items?.map((data) => (
          <li key={data.title}>
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              · {data.title}
            </Text.Subtitle>

            <Separator className='mt-xs' />

            <section className='mt-sm space-y-xs'>
              {data.description?.split(`\n`).map((p, i) => (
                <Text
                  key={i}
                  className='leading-relaxed tracking-wide first-letter:uppercase'
                >
                  {p}
                </Text>
              ))}
            </section>
          </li>
        ))}
      </ul>

      <div className='relative size-full overflow-hidden rounded-3xl group-odd:-order-1'>
        <ScrollAnimate.Transform config={ANIMATION_CONFIG.y}>
          <Image
            className='absolute inset-x-0 top-0 h-[115%] object-cover'
            {...data.image}
          />
        </ScrollAnimate.Transform>

        <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
          <div className='absolute size-[10%] group-odd:bottom-xs group-odd:right-xs group-odd:rotate-[--rotate] group-even:left-xs group-even:top-xs group-even:-rotate-[--rotate]'>
            <Icon
              className='size-full text-muted-content'
              {...data.icon}
            />
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default AboutViewBackgroundSection;
