import { Bg, Lines } from '@/components';
import { Image, Text } from '@/components/ui';
import { cn } from '@/utils';

import { MagneticButton } from '@/components/button';
import { EyeIcon } from '@/components/ui/icon/icons';
import { ScrollAnimationTransform } from '@/components/scroll-animation';

const ProjectViewHeroSection = ({ data={}, className, theme, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 0', '1 0']
    },
    propPoints: ['0%', '50%']
  }

  return (
    <section
      className={cn(
        'relative flex w-full pb-lg -mt-[--header-h] min-h-svh items-center flex-col',
        theme,
        className,
      )}
      {...props}
    >
       <div className='grid relative sm:grid-cols-4 w-9/10 max-w-screen-lg gap-sm pt-md'>
       <Text.Title
          asChild
          className='max-sm:text-center col-span-3 w-9/10 max-w-screen-lg'
          variants={{ size: 'lg' }}
        >
          <h1>
           
            {data.title}
            
          </h1>
        </Text.Title>

        
        <div className='flex justify-center'>
        {data.href &&
            <div className='absolute top-0 -translate-y-1/2'>
                  <MagneticButton
                asLink
                href={data.href}
                aria-label='View live website'
                  limit={0.2}
                  variants={{ size: 'lg' }}
                >
                  <EyeIcon/>
                </MagneticButton>
            </div>
          }      </div>    
       </div>

       <div className='w-full relative overflow-hidden'>
      <ScrollAnimationTransform config={animationConfig}>
      <Image quality={100} priority className='size-full object-cover' {...data.thumbnail}/>

      </ScrollAnimationTransform>
      </div>
      

        <Bg/>

        <Lines />
    </section>
  );
};

export default ProjectViewHeroSection;
