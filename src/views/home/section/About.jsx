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
        'mt-24 flex flex-col items-center justify-center',
        className,
      )}
      theme='dark'
      {...props}
    >
      <div className='flex w-full flex-col items-center justify-center'>
        <ul className='flex h-1/2 w-full max-w-bounds flex-col overflow-hidden'>
          {listContent.map(({ title, description }, i) => (
            <li
              className='w-full border-t py-10 last:border-b'
              key={`Work list ${title} ${description}`}
            >
              <HorizontalScroll baseVelocity={i % 2 === 0 ? -100 : 100}>
                <div className='mr-8 flex items-center gap-8'>
                  <Text.Title
                    asChild
                    className='shrink-0 text-7xl font-medium'
                  >
                    <p>{title}</p>
                  </Text.Title>

                  <span className='aspect-square w-[.2em] shrink-0 rounded-full bg-current text-7xl' />
                </div>
              </HorizontalScroll>
            </li>
          ))}
        </ul>

        <Magnetic>
          <Cursor.Sticky>
            <Link
              className='absolute aspect-square h-60 rounded-full border border-muted-content/50 bg-main text-2xl tracking-widest shadow-md'
              href='/work'
            >
              Explore
            </Link>
          </Cursor.Sticky>
        </Magnetic>
      </div>
    </Section>
  );
};

export default HomeSectionAbout;
