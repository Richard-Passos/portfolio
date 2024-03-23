import { Bg, Lines,Button, ScrollIndicator } from '@/components';
import { Image, Text } from '@/components/ui';
import { cn } from '@/utils';

import { ArrowLeftIcon, ArrowRightIcon, EyeIcon } from '@/components/ui/icon/icons';
import { ScrollAnimationTransform } from '@/components/scroll-animation';

const ProjectViewHeroSection = ({ data={}, className, theme, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-full pb-lg min-h-svh items-center flex-col',
        theme,
        className,
      )}
      {...props}
    >
       <div className='min-h-[65svh] flex items-center py-lg w-9/10 max-w-screen-lg justify-center'>
       <Text.Title
          asChild
          className='text-center'
          variants={{ size: 'xl' }}
        >
          <h1>
           
            {data.title}
            
          </h1>
        </Text.Title>
       </div>

        
        <div className='flex justify-between items-center mb-md w-9/10 max-w-screen-xl'>
<Button variants={{color: 'main', size: 'sm'}}>
  <Button.Icon animation='slideLeft'>
    <ArrowLeftIcon/>
  </Button.Icon>

  Prev
</Button>

          <ScrollIndicator/>

          <Button variants={{color: 'main', size: 'sm'}}>

  Next

  <Button.Icon animation='slideRight'>
    <ArrowRightIcon/>
  </Button.Icon>
</Button>
          </div>    

       <div id='scrollTo' className='w-full aspect-[1.5] relative flex items-center justify-center overflow-hidden'>
       {data.href &&
                  <Button.Magnetic
                asLink
                className='absolute z-10'
                href={data.href}
                aria-label='View live website'
                  variants={{ size: 'lg' }}
                >
                  <EyeIcon/>
                </Button.Magnetic>
          }  

      <div className='absolute -inset-y-[7.5%] inset-x-0'>
      <ScrollAnimationTransform config={{propPoints: ['-15%', '15%']}}>
      <Image quality={100} priority className='size-full object-cover' {...data.thumbnail}/>

      </ScrollAnimationTransform>
      </div>
      <span className='absolute inset-0 bg-[radial-gradient(hsl(var(--inverted)/.5)_25%,hsl(var(--inverted)/.25)_75%,transparent)]'/>
      
      </div>
      

        <Bg/>

        <Lines />
        <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-30' />
    </section>
  );
};

export default ProjectViewHeroSection;
