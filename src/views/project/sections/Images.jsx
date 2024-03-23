import {   ScrollTitle, Section } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Image } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewImagesSection = async ({
  promise,
  className,
  ...props
}) => {
  const data = (await promise).data?.images || [];

  return (
    <Section
      className={cn('flex w-full flex-col items-center relative z-10', className)}
      {...props}
    >
      <h2 className='w-full flex flex-col mb-lg'>
        <ScrollTitle title='GREAT'/>
        <ScrollTitle dir='rtl' title='IMAGES'/>
      </h2>

      <ul className='flex flex-col gap-xs w-9/10'>
      {data.map((img) => 
      <li className='w-full relative aspect-square overflow-hidden items-center flex justify-center' key={img.src}>

<Image className='max-sm:hidden size-1/3 rounded-md shadow-lg' {...img}/>

<ScrollAnimationTransform config={{propPoints: ['-30%', '30%']}}>
<Image quality={100}   className='absolute -z-10 size-full left-0 top-0 object-cover' {...img}/>
</ScrollAnimationTransform>

<span className='absolute inset-0 bg-main/10 -z-10'/>
</li>)}
      </ul>
    </Section>
  );
};

export default ProjectViewImagesSection;
