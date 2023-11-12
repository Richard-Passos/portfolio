import { ListHorizontalScroll, Section } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const listContent = ['Work method', 'Soft & hard skills', 'Projects'];

const HomeWorkSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col justify-center gap-24', className)}
      id='work'
      theme='dark'
      {...props}
    >
      <Text className='ml-12 mr-auto max-w-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at
        voluptatem perspiciatis vitae ullam doloremque, quos voluptates ut neque
        delectus.
      </Text>

      <div className='relative flex w-full items-center justify-center'>
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
      </div>

      <Text className='ml-auto mr-12 max-w-lg text-right'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non possimus
        corrupti, rem sapiente similique quod!
      </Text>
    </Section>
  );
};

export default HomeWorkSection;
