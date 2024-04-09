import { Icon, Text } from '@/components/ui';
import { cn } from '@/utils';

import DataChanger from './DataChanger'
import { BentoGrid, InfinityScroll, ScrollIndicator } from '@/components';
import { GlobeIcon, SmileIcon } from '@/components/ui/icon/icons';
import { ScrollAnimateTransform } from '@/components/scroll-animate';

const ANIMATION_CONFIG = {
  rotate1: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '360deg'],
    transformConfig: { clamp: false },
  },
  rotate2: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '-360deg'],
    transformConfig: { clamp: false },
  },
}

const ContactViewHeroSectionGrid = ({ className, data = {}, ...props }) => {  
    return (
      <BentoGrid
        className={cn(
          'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 [grid-template-areas:"item-0_.""item-1_item-1""item-2_item-2""item-3_item-3""item-4_item-4"] sm:[grid-template-areas:"item-0_item-1_item-1_item-1""item-0_item-1_item-1_item-1""item-2_item-2_item-3_item-3""item-4_item-4_item-4_item-4"] lg:[grid-template-areas:"item-0_item-1_item-1_item-1_item-2_item-2""item-0_item-1_item-1_item-1_item-3_item-3""item-4_item-4_item-4_item-4_item-4_item-4"]',
          className,
        )}
        {...props}
      >
        <BentoGrid.Item idx={0} className='items-end max-sm:pt-xs p-0 justify-center'>
            {data.icons?.map((icon) => (
              <div                 key={icon.src} className='aspect-square odd:hover:translate-y-1/2 transition-transform hover:-translate-y-[15%] w-1/3 first:-translate-x-full last:translate-x-full odd:absolute odd:bottom-0 odd:translate-y-[70%] even:-mb-[15%]'
>
                <Icon
                className='size-full text-muted'
                {...icon}
              />
              </div>
            ))}
          </BentoGrid.Item>

        <BentoGrid.Item idx={1} className='flex-col justify-between'>
          <Text className='first-letter:uppercase'>
            {data.description}
          </Text>

          <ScrollIndicator className='ml-auto'/>
        </BentoGrid.Item>

        <BentoGrid.Item idx={2} className='p-0'>
          <DataChanger data={data.dataChanger?.[0]} className='p-xs'/>
        </BentoGrid.Item>

        <BentoGrid.Item idx={3} className='p-0'>
          <DataChanger data={data.dataChanger?.[1]} className='p-xs'/>
        </BentoGrid.Item>  

        <BentoGrid.Item idx={4} className='p-xs items-center' >
        <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate1}>
            <SmileIcon className='size-6 text-muted-content'/>
          </ScrollAnimateTransform>

          <InfinityScroll className='text-muted-content uppercase text-sm [--duration:25s]'>{data.infinityText}&nbsp;</InfinityScroll>

          <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate2}>
          <GlobeIcon className='size-6 text-muted-content'/>
          </ScrollAnimateTransform>
        </BentoGrid.Item>
         </BentoGrid>
    );
  };

export default ContactViewHeroSectionGrid;