import { Bg, Lines } from '@/components';
import { Icon, Text } from '@/components/ui';
import { values } from '@/constants';
import { cn } from '@/utils';

const AboutValuesSection = ({ theme, className, ...props }) => {
  return (
    <section
      className={cn(
        'relative w-[90%] max-w-screen-xl pb-[min(28vh,theme(spacing.28))]',
        theme,
        className,
      )}
      {...props}
    >
      <ul className='max-md:space-y-sm md:grid md:grid-cols-3 md:gap-sm lg:grid-cols-4'>
        <li className='h-full space-y-1.5 p-[min(var(--p),theme(spacing.8))] [--p:8vw] md:[--p:2.5vw]'>
          <Text.Title className='text-xs uppercase'>My values</Text.Title>

          <Text className='text-xl text-muted-content'>always improving.</Text>
        </li>

        {values.map(({ icon, title, content }) => (
          <li
            className='flex h-full flex-col items-start gap-2 rounded-lg border bg-main p-[min(var(--p),theme(spacing.8))] transition-[background-color,border-color] [--p:8vw] md:[--p:2.5vw] md:[&:nth-child(4)]:col-start-2 lg:[&:nth-child(4)]:col-start-3'
            key={title}
          >
            <div className='flex aspect-square w-12 items-center justify-center rounded-md bg-muted'>
              <Icon
                className='h-1/2 w-1/2'
                name={icon}
              />
            </div>

            <Text.Subtitle className='mt-6 text-2xl'>{title}</Text.Subtitle>

            <Text className='text-muted-content'>{content}</Text>
          </li>
        ))}
      </ul>

      <Bg />
      <Lines />
    </section>
  );
};

export default AboutValuesSection;
