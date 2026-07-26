import { Section, SectionProps } from '@/components/layout/Section';
import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import { Text } from '@/components/system/Text';
import { MagneticButton } from '@/components/input/Button/Magnetic';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';
import { Title } from '@/components/system/Title';
import { ReviewTitleOnScroll } from '@/components/system/Title/ReviewOnScroll';
import { cn } from '@/utils/cn';
import { AnimateOnScroll } from '@/components/motion/Animate';

export type ErrorHeroProps = MergeProps<
  {
    data: {
      status: ReactNode;
      title: ReactNode;
      text: ReactNode;
      action: { url: string; label: ReactNode };
    };
  },
  SectionProps
>;

export const ErrorHero = ({ data, className, ...props }: ErrorHeroProps) => {
  return (
    <Section
      forceTheme
      className={cn('w-full', className)}
      {...props}
    >
      <ReviewTitleOnScroll>{data.status}</ReviewTitleOnScroll>

      <div className='relative mb-24 w-9/10 max-w-5xl border-b px-[5%] py-32'>
        <Title
          as='h1'
          styleAs='h5'
          className='max-w-lg'
        >
          {data.title}
        </Title>

        <Text className='mt-2 max-w-md text-placeholder'>{data.text}</Text>

        <AnimateOnScroll config={{ from: { x: '-50%', scale: 0.85 }, to: { x: '0%', scale: 1 } }}>
          <div className='absolute right-[5%] bottom-0 translate-y-1/2'>
            <MagneticButton
              color='primary'
              href={data.action.url}
              className='size-40 rounded-full border-border text-center sm:size-48 sm:text-xl'
            >
              {data.action.label}
            </MagneticButton>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};
