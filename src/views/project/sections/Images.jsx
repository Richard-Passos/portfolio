import {  ScrollTitle, Section } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Image } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewImagesSection = async ({
  promise,
  className,
  ...props
}) => {
  const data = await promise;

  return (
    <Section
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    >
      <h2 className='w-full flex flex-col mb-lg'>
        <ScrollTitle title='GREAT'/>
        <ScrollTitle dir='rtl' title='IMAGES'/>
      </h2>

      {data.map((image) => <div className='w-9/10 relative max-w-screen-xl flex items-center justify-center aspect-square overflow-hidden' key={image.src}>

        <Image className='max-sm:hidden size-1/3 rounded-md shadow-lg' {...image}/>

         <ScrollAnimationTransform config={{propPoints: ['-30%', '30%']}}>
        <Image quality={100}   className='absolute  -z-10 size-full left-0 top-0 object-cover' {...image}/>
        </ScrollAnimationTransform>

        <span className='absolute inset-0 bg-main/25 -z-10'/>
      </div>)}
    </Section>
  );
};

export default ProjectViewImagesSection;
