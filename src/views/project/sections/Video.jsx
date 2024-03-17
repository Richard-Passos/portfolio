'use client'

import { Section } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Text } from '@/components/ui';
import { cn } from '@/utils';
import Player from 'react-youtube'

const ProjectViewVideoSection = ({data, className, ...props}) => {
  
  const animationConfig = {
    scale: {
      useScrollConfig: {
        offset: ['.5 1', '1 1']
      },
      prop: '--scale',
      propPoints: [.25, 1]
    },
    x: {
      useScrollConfig: {
        offset: ['.5 1', '1 1']
      },
      prop: '--x',
      propPoints: [1, 0]
    }
  }

  return (
     <ScrollAnimationTransform config={animationConfig.scale}>
     <ScrollAnimationTransform config={animationConfig.x}>
      <Section  className={cn('aspect-[16/18] max-2xl:min-h-0 w-full pb-0 flex items-end', className)}     {...props}
     >


      <div className='sticky bottom-0 h-1/2 w-full grid grid-rows-3 justify-items-center'>
            <Text className='self-start font-semibold text-center mt-sm text-sm'>{data.title}</Text>

      <Text.Title className='size-full text-center flex items-center font-semibold justify-center text-[min(13vw,theme(fontSize.9xl))]'><span className='-translate-x-[calc(var(--x)*20vw)]'>Play</span>&nbsp;<span className='translate-x-[calc(var(--x)*20vw)]'>video</span></Text.Title>

      <Text className='self-end text-muted-content text-center sm:max-w-xs text-sm mb-md font-medium'>{data.description}</Text>
      

<div className='absolute scale-[--scale] inset-0 -z-10'>
<Player

className='*:size-full size-full'

videoId={data.id}
/>

<span className='absolute inset-0 bg-main/75'/>
</div>
      </div>
     </Section>
     </ScrollAnimationTransform>
     </ScrollAnimationTransform>
  );
};

export default ProjectViewVideoSection;
