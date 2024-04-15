import { ScrollAnimate, Section } from '@/components';
import { Image, Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  prop: 'y',
  propPoints: ['-13%', '0%'],
};

const ProjectViewAboutSection = ({
  project = {},
  data = {},
  className,
  ...props
}) => {
  const infoDescriptions = [
      project.roles?.join(' & '),
      project.client,
      project.year,
    ],
    objectiveDescriptions = [project.problem, project.solution];

  const infoItems = data.infoItems?.map((data, i) => ({
      ...data,
      description: infoDescriptions[i],
    })),
    objectiveItems = data.objectiveItems?.map((data, i) => ({
      ...data,
      description: objectiveDescriptions[i],
    }));

  return (
    <Section
      className={cn(
        'grid w-9/10 max-w-screen-xl gap-md sm:grid-cols-3',
        className,
      )}
      {...props}
    >
      <div className='top-md h-fit sm:sticky'>
        <Text className='text-2xl font-bold uppercase'>{project.title}</Text>

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

      <div className='col-span-2'>
        <Text.Title
          variants={{ size: 'lg' }}
          className='normal-case first-letter:uppercase'
        >
          {project.subtitle}
        </Text.Title>

        <Text className='mt-4 max-w-2xl text-lg/relaxed font-medium'>
          {project.description}
        </Text>

        <div className='mt-lg aspect-video overflow-hidden rounded-3xl bg-muted'>
          <ScrollAnimate.Transform config={ANIMATION_CONFIG}>
            <Image
              className='h-[115%] w-full object-cover'
              {...project.thumbnail}
            />
          </ScrollAnimate.Transform>
        </div>

        <ul className='mt-md flex max-w-screen-sm flex-col gap-md sm:ml-auto'>
          {objectiveItems?.map((data) => (
            <li key={data.title}>
              <Text.Subtitle className='uppercase'>{data.title}</Text.Subtitle>

              <Text className='mt-sm text-xl text-muted-content'>
                {data.description}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ProjectViewAboutSection;
