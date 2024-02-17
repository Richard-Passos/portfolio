import { Bg, Lines } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkViewStats = ({ theme, className, ...props }) => {
  return (
    <section
      className={cn(
        'relative min-h-[calc(var(--h)*1.5)] w-full [--h:100vh] 2xl:[--h:--max-h]',
        theme,
        className,
      )}
      {...props}
    >
      <div className='py-lg sticky top-0 flex flex-col items-center justify-center gap-md max-2xl:h-screen max-2xl:max-h-bounds max-2xl:min-h-screen'>
        <section className='col-start-3 col-end-5 row-start-2 flex w-9/10 flex-col items-center gap-sm'>
          <Text.Title
            className='flex flex-col items-center text-center font-bold'
            variants={{ size: 'xl' }}
          >
            <span className='text-[.15em] tracking-normal text-muted-content'>
              My
            </span>{' '}
            <span className='ml-auto'>stats</span>
          </Text.Title>

          <Text className='max-w-lg text-center text-muted-content'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            doloremque aspernatur architecto dolor eos. Harum minima modi
            deserunt culpa commodi! Facilis eveniet ad illo delectus?
          </Text>
        </section>

        <ul className='grid grid-cols-8 grid-rows-3 place-items-center gap-sm'>
          {[...Array(3)].map((_, i) => (
            <li
              className='col-start-4 col-end-6 row-span-2 row-end-4 flex flex-col items-center justify-center first:col-start-2 first:col-end-4 last:col-start-6 last:col-end-8 odd:row-start-1'
              key={i}
            >
              <Text.Subtitle className='mb-2 text-center text-xs uppercase text-muted-content'>
                Lorem, ipsum.
              </Text.Subtitle>

              <Text className='text-[10vw]/[1] font-bold'>10%</Text>

              <Text className='mt-sm -scr text-center text-muted-content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veniam, labore.
              </Text>
            </li>
          ))}
        </ul>
      </div>

      <Bg />

      <Lines />
    </section>
  );
};

export default WorkViewStats;
