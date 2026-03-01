import { ComponentProps } from 'react';

import { Icon, Title } from '@/components/atoms';
import Card from '@/components/display/Card';
import { Skill } from '@/types';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

import SkillCardHover from './Hover';

const DELAY = 500;

type SkillCardOwnProps = {
  data: Skill;
};

type SkillCardProps = MergeProps<SkillCardOwnProps, ComponentProps<'div'>>;

const SkillCard = ({ className, data, ...props }: SkillCardProps) => {
  return (
    <SkillCardHover delay={DELAY}>
      <div
        className={cn(
          'group/card perspective-1000 aspect-square w-40',
          className
        )}
        {...props}
      >
        <div className='ease-backOut relative size-full transition-transform duration-500 transform-3d group-data-[active=true]/card:rotate-y-180'>
          <Card.Root className='absolute items-center justify-center backface-hidden'>
            <div className='bg-gray-0 dark:bg-dark-6 flex size-1/2 items-center justify-center rounded'>
              <Icon
                className='size-1/2'
                src={data.icon}
              />
            </div>
          </Card.Root>

          <Card.Root className='absolute rotate-y-180 items-center justify-center backface-hidden'>
            <Title
              className='w-full text-center wrap-break-word'
              component='h4'
              order={6}
            >
              {data.title}
            </Title>
          </Card.Root>
        </div>
      </div>
    </SkillCardHover>
  );
};

export { SkillCard };
export type { SkillCardProps };
