import { ComponentProps, ReactNode } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { AnimateOnView, AnimateOnViewConfig } from '@/components/motion/Animate';
import GradientCard from '@/components/display/Card/Gradient';

export type PrimaryHeroCardProps = {
  icon: ReactNode;
  title: ReactNode;
  text: ReactNode;
};

export type PrimaryHeroCardsProps = MergeProps<
  {
    data: {
      left: PrimaryHeroCardProps;
      center: PrimaryHeroCardProps;
      right: PrimaryHeroCardProps;
    };
  },
  ComponentProps<'section'>
>;

export const PrimaryHeroCardsAnimation = {
  target: '.group',
  from: {
    y: 100,
    scale: 0.85,
    filter: 'blur(20px)'
  },
  to: {
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.7,
    ease: 'power2.out',
    stagger: {
      each: 0.08,
      from: 'center'
    }
  }
} satisfies AnimateOnViewConfig;

export const PrimaryHeroCards = ({ data, className, ...props }: PrimaryHeroCardsProps) => {
  return (
    <AnimateOnView config={PrimaryHeroCardsAnimation}>
      <section
        className={cn(
          'mt-28 grid w-full items-end gap-4 md:grid-cols-12 [&_svg]:transition-transform [&_svg]:duration-700 [&_svg]:ease-backOut',
          className
        )}
        {...props}
      >
        <GradientCard
          className='group md:col-span-6 lg:col-span-3'
          gradient='radial-gradient(
            140% 140% at 0% 100%,
            #411073 0%,
            #0c1149 10%,
            #f00040 20%,
            transparent 60%
          )'
        >
          <GradientCard.Icon className='group-hover:*:rotate-y-360'>
            {data.left.icon}
          </GradientCard.Icon>

          <GradientCard.Title>{data.left.title}</GradientCard.Title>

          <GradientCard.Text>{data.left.text}</GradientCard.Text>
        </GradientCard>

        <GradientCard
          className='group min-h-64 md:col-span-full lg:col-span-6'
          gradient='radial-gradient(
            140% 140% at 50% 0%,
            #f00040 0%,
            #f00040 25%,
            transparent 37.5%,
            #411073 50%,
            #0c1149 75%
          )'
        >
          <GradientCard.Icon className='group-hover:*:rotate-x-360'>
            {data.center.icon}
          </GradientCard.Icon>

          <GradientCard.Title>{data.center.title}</GradientCard.Title>

          <GradientCard.Text>{data.center.text}</GradientCard.Text>
        </GradientCard>

        <GradientCard
          className='group md:col-span-6 md:max-lg:row-start-1 lg:col-span-3'
          gradient='radial-gradient(
            140% 140% at 100% 0%,
            #411073 0%,
            #0c1149 10%,
            #f00040 20%,
            transparent 60%
          )'
        >
          <GradientCard.Icon className='group-hover:*:-rotate-y-360'>
            {data.right.icon}
          </GradientCard.Icon>

          <GradientCard.Title>{data.right.title}</GradientCard.Title>

          <GradientCard.Text>{data.right.text}</GradientCard.Text>
        </GradientCard>
      </section>
    </AnimateOnView>
  );
};
