import {  Bg, Lines, TextScrollAnimation } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Image, Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewAboutSection = ({  data = {}, className,theme, ...props }) => {
  const listItems = [{title: 'Roles', description: data.roles?.join(' & ')}, {title: 'Client', description: data.client}, {title: 'year', description: data.year}]


  const items = [{title: 'The problem', description: data.problem}, {title: 'The solution', description: data.solution}]

  return (
    <section
      className={cn('relative justify-center max-2xl:min-h-screen z-10 w-9/10 pb-lg flex flex-col items-center',theme, className)}
      {...props}
    >
<div className='w-full flex gap-x-md max-w-screen-lg mb-lg gap-y-sm max-sm:flex-col justify-between'>
  <Text className='max-w-2xl text-xl font-medium'><TextScrollAnimation text={data.description}/></Text>

<ul className='space-y-2'>
{listItems.map((data) => <li className='flex max-sm:flex-col gap-x-sm gap-y-1.5' key={data.title}><Text.Subtitle className='text-xs uppercase text-muted-content w-14'>{data.title}:</Text.Subtitle> <Text className='text-sm font-semibold first-letter:uppercase lowercase sm:col-span-2'>{data.description}</Text></li>)}
</ul>
  </div>

      <div className='grid sm:grid-cols-12 max-w-screen-lg w-full mb-lg gap-sm'>
      <div className='sm:col-span-7 relative w-full aspect-square rounded-3xl overflow-hidden'>
      <div className='absolute -inset-y-[7.5%] inset-x-0'>
      <ScrollAnimationTransform config={{propPoints: ['-15%', '15%']}}>
      <Image className='size-full object-cover' {...data.thumbnail}/>

      </ScrollAnimationTransform>
      </div> </div>  

<ScrollAnimationTransform config={{prop: '--y', propPoints: [-.333, .333]}}>
<div className='rounded-3xl relative size-full translate-y-[calc(var(--y)*theme(spacing.lg))] sm:col-span-5 overflow-hidden max-sm:hidden'>
<ScrollAnimationTransform config={{propPoints: ['-15%', '15%']}}>
<div className='absolute -inset-y-[7.5%] inset-x-0'>
<Image className='size-full object-cover' {...data.thumbnail}/>

</div>
      </ScrollAnimationTransform>
  </div></ScrollAnimationTransform>        </div>

        <ul className='w-full max-w-screen-lg flex flex-col sm:items-end gap-lg mb-lg'>
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