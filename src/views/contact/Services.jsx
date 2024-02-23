import { Services } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Separator, Text } from '@/components/ui';
import { services } from '@/constants';
import { cn } from '@/utils';

const ContactViewServices = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: { offset: ['1 1', '1 0'] },
    prop: '--y',
    propPoints: ['0%', '100%'],
  };

  return (
    <section
      className={cn(
        'w-9/10 max-w-screen-lg max-2xl:min-h-screen',
        className,
      )}
      {...props}
    >
      <Text.Subtitle className='mb-md mr-auto text-2xl font-medium'>
        I could help you with...
      </Text.Subtitle>

      <div className='grid gap-md sm:grid-cols-2'>
        <ScrollAnimationTransform config={animationConfig}>
          <div className='h-1/2 translate-y-[--y] rounded-3xl bg-blue-500 max-sm:hidden md:h-2/3 md:translate-y-[calc(var(--y)/2)]' />
        </ScrollAnimationTransform>

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
    </section>
  );
};

export default ContactViewServices;
