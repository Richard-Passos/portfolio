import { Bg, Lines, ScrollTitle, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkViewMethod = ({ theme, className, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center gap-md py-[min(28vh,theme(spacing.28))] max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds',
        theme,
        className,
      )}
      {...props}
    >
      <h2 className='w-full'>
        <ScrollTitle title='METHOD' />
      </h2>

      <section className='w-9/10 flex max-w-screen-xl justify-between gap-sm max-sm:flex-col'>
        <Text className='max-w-lg text-4xl/tight font-medium sm:text-5xl/tight'>
          <TextScrollAnimation text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <Text className='max-w-lg text-muted-content'>
          With a vision for innovation and excellence, we create cohesive brand
          transformations that reflect the values and ethos of your company.
        </Text>
      </section>

      <Bg />

      <Lines />
    </section>
  );
};

export default WorkViewMethod;
