import { Cursor, List, Section } from '@/components';
import { Link, Text } from '@/components/ui';
import { cn } from '@/utils';

const listContent = [
  { title: 'Work method', description: 'How I manage to solve problems' },
  { title: 'Skills', description: 'My soft and hard skills' },
  { title: 'Projects', description: 'Projects I built' },
  { title: '...', description: 'Want more? Follow the link' },
];

const HomeSectionWork = ({ className, ...props }) => {
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        repellat voluptates tempora dicta fugiat optio necessitatibus ea nihil,
        ab doloremque.
      </Text.Title>

      <Cursor.Hover
        content={{
          type: 'icon',
          name: 'Arrow',
          className: '-rotate-45',
        }}
        variant={{ scaleX: 1, scaleY: 1 }}
      >
        <Link
          className='w-full'
          href='/work'
        >
          <List>
            {listContent.map(({ title, description }) => (
              <List.Item key={`Work list ${title} ${description}`}>
                <Text.Title
                  asChild
                  className='text-7xl font-medium'
                >
                  <h3>{title}</h3>
                </Text.Title>

                <Text className='opacity-0 transition-opacity group-hover:opacity-100'>
                  {description}
                </Text>
              </List.Item>
            ))}
          </List>
        </Link>
      </Cursor.Hover>
    </Section>
  );
};

export default HomeSectionWork;
