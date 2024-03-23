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

      <ul className='flex flex-col gap-sm w-9/10'>
      {data.map((img) => 
      <li className='w-full relative aspect-square overflow-hidden items-center flex justify-center' key={img.src}>

<Image className='max-sm:hidden size-1/3 object-cover rounded-md shadow-lg' {...img}/>

<div className='absolute -inset-y-[7.5%] inset-x-0 -z-10'>
<ScrollAnimationTransform config={{propPoints: ['-15%', '15%']}}>
<Image quality={100}   className='size-full object-cover' {...img}/>
</ScrollAnimationTransform>
</div>

<span className='absolute inset-0 bg-main/10 -z-10'/>
</li>)}
      </ul>
    </Section>
  );
};

export default ProjectViewImagesSection;
