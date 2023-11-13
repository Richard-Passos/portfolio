import { ListHorizontalScroll, Section } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const listContent = ['Work method', 'Soft & hard skills', 'Projects'];

const HomeWorkSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('relative flex items-center justify-center', className)}
      {...props}
    >
      <ListHorizontalScroll>
        {listContent.map((content, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={i % 2 === 0 ? 100 : -100}
            key={content}
          >
            <div className='mx-4 flex items-center gap-8 opacity-75'>
              <Text>{content}</Text>

              <span className='aspect-square w-[.2em] rounded-full bg-current' />
            </div>
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll>

      <ListHorizontalScroll.Link
        className='absolute'
        href='/work'
      >
        Explore
      </ListHorizontalScroll.Link>
    </Section>
  );
};

export default HomeWorkSection;
