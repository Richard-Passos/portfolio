import { BentoGrid, BentoGridProps } from '@/components/display/BentoGrid';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type AboutBentoGridProps = MergeProps<
  { templates?: BentoGridProps['templates'] },
  BentoGridProps
>;

export const AboutBentoGrid = ({ className, ...props }: AboutBentoGridProps) => {
  return (
    <BentoGrid
      id='about'
      templates={{
        base: ['about', 'better', 'love', 'location', 'hobbies', 'gallery'],
        sm: [
          'about    about',
          'better   love',
          'location location',
          'hobbies  hobbies',
          'gallery  gallery'
        ],
        lg: [
          '.       about    about',
          '.       about    about',
          'hobbies better   gallery',
          'hobbies love     gallery',
          'hobbies location gallery',
          'hobbies location gallery'
        ]
      }}
      className={cn('w-9/10 max-w-7xl', className)}
      {...props}
    />
  );
};
