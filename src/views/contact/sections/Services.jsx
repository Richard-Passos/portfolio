import { ScrollTitle, Section, Services } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Separator } from '@/components/ui';
import { services } from '@/constants';
import { cn } from '@/utils';

const ContactViewServicesSection = ({ className, ...props }) => {
  const animationConfig = {
    scrollConfig: { offset: ['1 1', '1 0'] },
    prop: '--y',
    propPoints: ['0%', '100%'],
  };

  return (
    <Section
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    >
      <h2 className='mb-md w-full'>
        <ScrollTitle title='SERVICES' />
      </h2>

      <div className='grid w-9/10 max-w-screen-lg gap-md sm:grid-cols-2'>
        <ScrollAnimateTransform config={animationConfig}>
          <div className='h-1/2 translate-y-[--y] rounded-3xl bg-blue-500 max-sm:hidden md:h-2/3 md:translate-y-[calc(var(--y)/2)]' />
        </ScrollAnimateTransform>

        <Services className='sm:py-md'>
          {services.map(({ title, description }, i) => (
            <Services.Item key={title}>
              <Services.Number index={i} />

              <Separator />

              <Services.Title>{title}</Services.Title>

              <Services.Description>{description}</Services.Description>
            </Services.Item>
          ))}
        </Services>
      </div>
    </Section>
  );
};

export default ContactViewServicesSection;
