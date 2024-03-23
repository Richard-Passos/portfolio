import {  Bg, Lines, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewAboutSection = ({  data = {}, className,theme, ...props }) => {
  const listItems = [{title: 'Roles', description: data.roles?.join(' & ')}, {title: 'Client', description: data.client}, {title: 'year', description: data.year}]


  const items = [{title: 'The problem', description: data.problem}, {title: 'The solution', description: data.solution}]

  return (
    <section
      className={cn('relative justify-center max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds z-10 w-9/10 max-w-screen-lg pb-lg flex flex-col items-center',theme, className)}
      {...props}
    >
        <Text.Subtitle className='uppercase mb-4 mr-auto'>About</Text.Subtitle> 

       <div className='w-full flex gap-x-md mb-lg gap-y-sm max-sm:flex-col justify-between'>
        <Text className='max-w-2xl text-xl font-medium'><TextScrollAnimation text={data.description}/></Text>

<ul className='space-y-2'>
  {listItems.map((data) => <li className='flex max-sm:flex-col gap-x-sm gap-y-1.5' key={data.title}><Text.Subtitle className='text-xs uppercase text-muted-content w-14'>{data.title}:</Text.Subtitle> <Text className='text-sm font-semibold first-letter:uppercase lowercase sm:col-span-2'>{data.description}</Text></li>)}
</ul>
        </div>

        <ul className='w-full flex flex-col sm:items-end gap-lg mb-lg'>
        {items.map(data => <li className='w-full max-w-screen-sm' key={data.title}>
          <Text.Subtitle className='uppercase mb-sm'>{data.title}</Text.Subtitle> 
          
          <Text className='text-muted-content text-xl'>{data.description}</Text>
          </li>)}
      </ul>

<Bg/>
<Lines/>
    </section>
  );
};

export default ProjectViewAboutSection;