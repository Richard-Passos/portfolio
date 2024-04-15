import { ScrollAnimate, Section } from '@/components';
import { Image, Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
    prop: 'y',
    propPoints: ['-13%', '0%'],
};

const ProjectViewAboutSection = ({ project = {}, data = {}, className, ...props }) => {
  const infoDescriptions = [
    project.roles?.join(' & '),
    project.client,
    project.year,
 ],
 objectiveDescriptions = [
  project.problem,
  project.solution
 ]

  const infoItems = data.infoItems?.map((data, i) => ({...data, description: infoDescriptions[i]})),
  objectiveItems = data.objectiveItems?.map((data, i) => ({...data, description: objectiveDescriptions[i]}))

  return (
    <Section
      className={cn(
        'grid sm:grid-cols-3 w-9/10 max-w-screen-xl gap-md',
        className,
      )}
      {...props}
    >
        <div className='sm:sticky top-md h-fit'>
        <Text className='uppercase font-bold text-2xl'>
          {project.title}
        </Text>

        <ul className='space-y-2 mt-4 max-w-52'>
          {infoItems?.map((data) => (
            <li
              className='grid w-full sm:grid-cols-3 gap-x-sm gap-y-1.5'
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
          <Text.Title variants={{size: 'lg'}} className='normal-case first-letter:uppercase'>
            {project.subtitle}
          </Text.Title>

        <Text className='mt-4 max-w-2xl text-lg/relaxed font-medium'>
          {project.description}
        </Text>

      <div className='mt-lg aspect-video rounded-3xl bg-muted overflow-hidden'>
            <ScrollAnimate.Transform config={ANIMATION_CONFIG}>
              <Image
                className='h-[115%] w-full object-cover'
                {...project.thumbnail}
              />
            </ScrollAnimate.Transform>
      </div>

      <ul className='mt-md flex sm:ml-auto flex-col gap-md max-w-screen-sm'>
        {objectiveItems?.map((data) => (
          <li
            key={data.title}
          >
            <Text.Subtitle className='uppercase'>
              {data.title}
            </Text.Subtitle>

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
