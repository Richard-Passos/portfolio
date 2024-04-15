import { Button, ScrollTitle, Section, TextScrollAnimate } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Icon, Image } from '@/components/ui';
import { Text } from '@/components/ui/text';
import { cn, normKey } from '@/utils';

const ANIMATION_CONFIG = {
  prop: 'y',
  propPoints: ['-13%', '0%'],
};

const ProjectViewImagesSection = async ({
  promise,
  project = {},
  className,
  data = {},
  ...props
}) => {
  const { images = [] } = (await promise)?.data || {};

  const infoDescriptions = [
    project.roles?.join(' & '),
    project.client,
    project.year,
  ];

  const infoItems = data.infoItems?.map((data, i) => ({
    ...data,
    description: infoDescriptions[i],
  }));

  const imagesTypes = {
    full: 'col-span-full aspect-video',
    '1/2': 'aspect-[1/1.25]',
  };

  return (
    <Section
      className={cn(
        'z-10 flex flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      <h2 className='w-full'>
        {data.title?.map((w, i) => (
          <ScrollTitle
            dir={i % 2 === 0 ? 'ltr' : 'rtl'}
            key={i}
            title={w}
          />
        ))}
      </h2>

      {(data.subtitle || data.description) && (
        <section className='mt-md flex w-9/10 max-w-screen-xl gap-sm max-sm:flex-col'>
          {data.subtitle && (
            <Text className='grow basis-0 text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-5xl/tight'>
              <TextScrollAnimate
                className='first:first-letter:uppercase'
                text={data.subtitle}
              />
            </Text>
          )}

          {data.description && (
            <section className='flex grow basis-0 flex-col items-center sm:ml-auto sm:max-w-lg sm:items-start'>
              <Text className='text-muted-content first-letter:uppercase max-sm:text-center'>
                {data.description}
              </Text>

              {data.action && (
                <Button
                  className='mt-md'
                  {...action.data}
                >
                  {action.data?.label}

                  <Button.Icon animation={action.animation}>
                    <Icon {...action.icon} />
                  </Button.Icon>
                </Button>
              )}
            </section>
          )}
        </section>
      )}

      <div className='relative mt-lg grid w-9/10 max-w-screen-xl gap-md sm:grid-cols-3'>
        <div className='top-md h-fit sm:sticky'>
          <Text.Title className='text-2xl uppercase'>
            {project.title}
          </Text.Title>

          <ul className='mt-4 max-w-52 space-y-2'>
            {infoItems?.map((data) => (
              <li
                className='grid w-full gap-x-sm gap-y-1.5 sm:grid-cols-3'
                key={data.title}
              >
                <Text.Subtitle className='text-xs uppercase text-muted-content'>
                  {data.title}:
                </Text.Subtitle>

                <Text className='text-sm font-semibold first-letter:uppercase sm:col-span-2'>
                  {data.description}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <ul className='col-span-2 grid gap-sm sm:grid-cols-2'>
          {images.map(({ type = '', data = {} }) => (
            <li
              className={cn(
                'w-full overflow-hidden rounded-3xl bg-muted',
                imagesTypes[normKey(type)],
              )}
              key={data.src}
            >
              <ScrollAnimateTransform config={ANIMATION_CONFIG}>
                <Image
                  className='h-[115%] w-full object-cover'
                  {...data}
                />
              </ScrollAnimateTransform>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ProjectViewImagesSection;
