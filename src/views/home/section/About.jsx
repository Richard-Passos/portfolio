import { Cursor, FollowPointer, List, Section } from '@/components';
import { Link, Svg, Text } from '@/components/ui';
import { cn } from '@/utils';

const listContent = [
  { title: 'Personality', description: 'My mindset' },
  { title: 'Hobbys', description: 'Things I like to do' },
  { title: 'Background', description: 'My way until now' },
  { title: '...', description: 'You already know what to do' },
];

const HomeSectionAbout = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'mt-24 flex h-auto max-h-none flex-col gap-12 p-24',
        className,
      )}
      theme='dark'
      {...props}
    >
      <Text.Title className='max-w-xl text-2xl font-normal leading-normal'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        laudantium, error iste ea fuga illum!
      </Text.Title>

      <Cursor.Hover variant={{ scaleX: 2.5, scaleY: 2.5 }}>
        <FollowPointer.Area id='follow-pointer-link-arrow'>
          <Link
            className='w-full'
            href='/about'
          >
            <List>
              {listContent.map(({ title, description }) => (
                <List.Item key={`Work list ${title} ${description}`}>
                  <Text.Title
                    asChild
                    className='text-7xl font-medium'
                    cursorProps={{
                      disabled: true,
                    }}
                  >
                    <h3>{title}</h3>
                  </Text.Title>

                  <Text
                    className='opacity-0 transition-opacity group-hover:opacity-100'
                    cursorProps={{
                      disabled: true,
                    }}
                  >
                    {description}
                  </Text>
                </List.Item>
              ))}
            </List>

            <FollowPointer id='follow-pointer-link-arrow'>
              <div>
                <Svg.Arrow className='w-12 -rotate-45 text-primary-content' />
              </div>
            </FollowPointer>
          </Link>
        </FollowPointer.Area>
      </Cursor.Hover>
    </Section>
  );
};

export default HomeSectionAbout;
