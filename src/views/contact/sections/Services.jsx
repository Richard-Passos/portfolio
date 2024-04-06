import { ScrollAnimate, ScrollTitle, Section, Services } from '@/components';
import '@/components/scroll-animate';
import { Image, Separator } from '@/components/ui';
import { services } from '@/constants';
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

const ContactViewServicesSection = ({ className, data = {}, ...props }) => {
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
