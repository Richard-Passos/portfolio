import { Bg, Lines, TextScrollAnimate, ScrollAnimate } from '@/components';
import { Image, Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewAboutSection = ({ data = {}, className, theme, ...props }) => {
  const animationConfig = {
    y1: {
        prop: 'y',
        propPoints: ['-15%', '15%']
    },
    y2: {
      prop: '--y',
      propPoints: [-0.333, 0.333]
  }
  }

  const listItems = [
    { title: 'Roles', description: data.roles?.join(' & ') },
    { title: 'Client', description: data.client },
    { title: 'year', description: data.year },
  ];

  const items = [
    { title: 'The problem', description: data.problem },
    { title: 'The solution', description: data.solution },
  ];

  return (
    <section
      className={cn(
        'relative z-10 flex w-9/10 flex-col items-center justify-center pb-lg max-2xl:min-h-screen',
        theme,
        className,
      )}
      {...props}
    >
      <div className='mb-lg flex w-full max-w-screen-lg justify-between gap-x-md gap-y-sm max-sm:flex-col'>
        <Text className='max-w-2xl text-xl font-medium'>
          <TextScrollAnimate text={data.description} />
        </Text>

        <ul className='space-y-2'>
          {listItems.map((data) => (
            <li
              className='flex gap-x-sm gap-y-1.5 max-sm:flex-col'
              key={data.title}
            >
              <Text.Subtitle className='w-14 text-xs uppercase text-muted-content'>
                {data.title}:
              </Text.Subtitle>{' '}
              <Text className='text-sm font-semibold lowercase first-letter:uppercase sm:col-span-2'>
                {data.description}
              </Text>
            </li>
          ))}
        </ul>
      </div>

      <div className='mb-lg grid w-full max-w-screen-lg gap-sm sm:grid-cols-12'>
        <div className='relative aspect-square w-full overflow-hidden rounded-3xl sm:col-span-7'>
          <div className='absolute -inset-y-[7.5%] inset-x-0'>
            <ScrollAnimate.Transform config={animationConfig.y1}>
              <Image
                className='size-full object-cover'
                {...data.thumbnail}
              />
            </ScrollAnimate.Transform>
          </div>{' '}
        </div>
        <ScrollAnimate
          config={animationConfig.y2}
        >
          <div className='relative size-full translate-y-[calc(var(--y)*theme(spacing.lg))] overflow-hidden rounded-3xl max-sm:hidden sm:col-span-5'>
            <ScrollAnimate.Transform config={animationConfig.y1}>
              <div className='absolute -inset-y-[7.5%] inset-x-0'>
                <Image
                  className='size-full object-cover'
                  {...data.thumbnail}
                />
              </div>
            </ScrollAnimate.Transform>
          </div>
        </ScrollAnimate>{' '}
      </div>

      <ul className='mb-lg flex w-full max-w-screen-lg flex-col gap-lg sm:items-end'>
        {items.map((data) => (
          <li
            className='w-full max-w-screen-sm'
            key={data.title}
          >
            <Text.Subtitle className='mb-sm uppercase'>
              {data.title}
            </Text.Subtitle>

            <Text className='text-xl text-muted-content'>
              {data.description}
            </Text>
          </li>
        ))}
      </ul>

      <Bg />
      <Lines />
    </section>
  );
};

export default ProjectViewAboutSection;
