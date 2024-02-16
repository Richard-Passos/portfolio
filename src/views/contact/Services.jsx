import { Services } from '@/components';
import { Separator, Text } from '@/components/ui';
import { services } from '@/constants';
import { cn } from '@/utils';

const ContactViewServices = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'w-9/10 relative flex max-w-screen-xl flex-col gap-md',
        className,
      )}
      {...props}
    >
      <Text.Title className='text-center text-3xl'>
        Services I could help you with...
      </Text.Title>

      <Services>
        {services.map(({ title, description }, i) => (
          <Services.Item key={title}>
            <Services.Number index={i} />

            <Separator />

            <Services.Title>{title}</Services.Title>

            <Services.Description>{description}</Services.Description>
          </Services.Item>
        ))}
      </Services>
    </section>
  );
};

export default ContactViewServices;
