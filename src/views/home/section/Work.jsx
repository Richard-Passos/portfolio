import { Cursor, FollowPointer, List, Section } from '@/components';
import { Link, Svg, Text } from '@/components/ui';
import { cn } from '@/utils';

const ListContent = [
  { title: 'Work method', description: 'How I manage to solve problems' },
  { title: 'Skills', description: 'My soft and hard skills' },
  { title: 'Projects', description: 'Projects I built' },
  { title: '...', description: 'Want more? Follow the link' },
];

const HomeSectionWork = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'mt-24 flex h-auto max-h-none flex-col items-center justify-around gap-12 p-24',
        className,
      )}
      theme='dark'
      {...props}
    >
      <Text.Title className='text-lg font-bold'>
        Work things, like...
      </Text.Title>

      <Cursor.Hover variant={{ scaleX: 2.5, scaleY: 2.5 }}>
        <FollowPointer.Area id='follow-pointer-link-arrow'>
          <Link
            className='w-full'
            href='/work'
          >
            <List>
              {ListContent.map(({ title, description }) => (
                <List.Item
                  className='text-xl'
                  key={`Work list ${title} ${description}`}
                >
                  <Text.Title
                    asChild
                    className='text-7xl'
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

export default HomeSectionWork;
