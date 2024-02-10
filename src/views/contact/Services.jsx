import { Separator, Text } from '@/components/ui';
import { services } from '@/constants';
import { cn } from '@/utils';

const ContactViewServices = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-[90%] max-w-screen-xl flex-col gap-md',
        className,
      )}
      {...props}
    >
      <Text.Title className='text-center text-3xl'>
        Services I could help you with...
      </Text.Title>

      <ul className='grid gap-md sm:grid-cols-3'>
        {services.map(({ title, description }, i) => (
          <li
            className='flex flex-col gap-4'
            key={title}
          >
            <Text className='text-xs font-semibold text-muted-content'>
              • {`${i + 1}`.padStart(2, '0')}
            </Text>

            <Separator />

            <Text.Subtitle className='mt-4 text-2xl lowercase first-letter:uppercase'>
              {title}
            </Text.Subtitle>

            <Text className='text-sm leading-relaxed text-muted-content'>
              {description}
            </Text>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactViewServices;
