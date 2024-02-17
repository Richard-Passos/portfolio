import { Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkViewStats = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'py-lg relative flex w-full flex-col items-center justify-center gap-md',
        className,
      )}
      {...props}
    >
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
          doloremque aspernatur architecto dolor eos. Harum minima modi deserunt
          culpa commodi! Facilis eveniet ad illo delectus?
        </Text>
      </section>

      <ul className='grid grid-cols-8 grid-rows-3 place-items-center gap-sm'>
        {[...Array(3)].map((_, i) => (
          <li
            className='col-start-4 col-end-6 row-span-2 row-end-4 flex flex-col items-center justify-center first:col-start-2 first:col-end-4 last:col-start-6 last:col-end-8 odd:row-start-1'
            key={i}
          >
            <Text.Subtitle className='text-center text-xs uppercase text-muted-content'>
              Lorem, ipsum.
            </Text.Subtitle>

            <Text className='text-[10vw]/[1] font-bold'>10%</Text>

            <Text className='-scroll-mt-md text-center text-muted-content'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
              labore.
            </Text>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkViewStats;
