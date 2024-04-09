import { globalsApi } from '@/api';
import { ScrollAnimate, ScrollTitle, Section, Services } from '@/components';
import '@/components/scroll-animate';
import { Image, Separator } from '@/components/ui';
import { GlobeIcon, SmileIcon } from '@/components/ui/icon/icons';
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
  const { services = [] } =
    (await globalsApi.getOne('personal-info')).data || {};

  return (
    <Section
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <h2 className='w-full'>
        {data.title?.map((w, i) => (
          <ScrollTitle
            key={i}
            title={w}
          />
        ))}
      </h2>

      <div className='mt-md grid w-9/10 max-w-screen-lg gap-md sm:grid-cols-2'>
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

          <ScrollAnimate.Transform config={ANIMATION_CONFIG.rotate1}>
            <SmileIcon
              aria-hidden
              className='absolute right-0 top-0 -z-10 size-[min(30vmin,theme(maxWidth.xs))] text-muted'
            />
          </ScrollAnimate.Transform>

          <ScrollAnimate.Transform config={ANIMATION_CONFIG.rotate2}>
            <GlobeIcon
              aria-hidden
              className='absolute bottom-0 left-0 -z-10 size-[min(30vmin,theme(maxWidth.xs))] text-muted'
            />
          </ScrollAnimate.Transform>
        </div>

        <Services className='sm:py-md'>
          {services.map((data, i) => (
            <Services.Item key={data.title}>
              <Services.Number index={i} />

              <Separator />

              <Services.Title>{data.title}</Services.Title>

              <Services.Description>{data.description}</Services.Description>
            </Services.Item>
          ))}
        </Services>
      </div>
    </Section>
  );
};

export default ContactViewServicesSection;
