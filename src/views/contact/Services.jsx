import { Icon, Text } from '@/components/ui';
import { services } from '@/constants';
import { cn } from '@/utils';

const ContactViewServices = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'flex w-[90%] max-w-screen-xl flex-col items-center gap-md',
        className,
      )}
      {...props}
    >
      <Text.Title className='text-center text-2xl'>Services</Text.Title>

      <ul className='grid gap-sm md:grid-cols-3'>
        {services.map(({ icon, title, description }) => (
          <li
            className='space-y-2 rounded-md border bg-main p-6 transition-bg'
            key={title}
          >
            <Icon
              className='mb-4 h-6 w-6'
              name={icon}
            />

            <Text.Subtitle className='text-sm uppercase'>{title}</Text.Subtitle>

            <Text className='text-sm text-muted-content'>{description}</Text>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactViewServices;
