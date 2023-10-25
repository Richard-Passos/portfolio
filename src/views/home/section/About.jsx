import { Cursor, HorizontalScroll, Magnetic, Section } from '@/components';
import { Link, Text } from '@/components/ui';
import { cn } from '@/utils';

const listContent = [
  { title: 'Personality', description: 'My mindset' },
  { title: 'Hobbys', description: 'Things I like to do' },
  { title: 'Background', description: 'My way until now' },
];

const HomeSectionAbout = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'mt-24 flex flex-col items-center justify-center gap-24',
        className,
      )}
      theme='dark'
      {...props}
    >
      <Text className='ml-12 mr-auto max-w-lg text-lg'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
        molestias veniam asperiores odio, natus recusandae?
      </Text>

      <div className='flex w-full flex-col items-center justify-center'>
        <ul className='w-full max-w-bounds opacity-90'>
          {listContent.map(({ title, description }, i) => (
            <li
              className='w-full border-t py-10 last:border-b'
              key={`Work list ${title} ${description}`}
            >
              <HorizontalScroll baseVelocity={i % 2 === 0 ? 100 : -100}>
                <div className='mr-8 flex items-center gap-8 text-[3.375rem] leading-none'>
                  <Text className='font-medium'>{title}</Text>

                  <span className='aspect-square w-[.2em] rounded-full bg-current' />
                </div>
              </HorizontalScroll>
            </li>
          ))}
        </ul>

        <Magnetic limit={0.4}>
          <Link
            className='absolute aspect-square h-60 overflow-hidden rounded-full border border-muted-content/50 bg-main text-2xl tracking-widest shadow-[0_0_64px_-8px_hsl(0_0%_0%/.15)] transition-[background-color,box-shadow]'
            href='/work'
          >
            <Magnetic limit={0.35}>
              <span className='flex h-full w-full items-center justify-center rounded-inherit'>
                Explore
              </span>
            </Magnetic>
          </Link>
        </Magnetic>
      </div>

      <Text className='ml-auto mr-12 max-w-lg text-right'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non possimus
        corrupti, rem sapiente similique quod!
      </Text>
    </Section>
  );
};

export default HomeSectionAbout;
