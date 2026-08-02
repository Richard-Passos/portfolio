import { MergeProps } from '@/types/MergeProps';
import { Skill } from '@/types/Skill';
import SpinCard, { SpinCardGroupProps } from '@/components/display/Card/Spin';
import { cn } from '@/utils/cn';

export type SkillsItemsProps = MergeProps<{ items: Skill[] }, SpinCardGroupProps>;

export const SkillsItems = ({ items, className, ...props }: SkillsItemsProps) => {
  return (
    <SpinCard.Group
      className={cn('mt-12 max-w-7xl', className)}
      {...props}
    >
      {items.map(({ id, title, Icon }) => (
        <SpinCard key={id}>
          <SpinCard.Content>
            <SpinCard.Front>
              <SpinCard.Icon>
                <Icon />
              </SpinCard.Icon>
            </SpinCard.Front>

            <SpinCard.Back>
              <SpinCard.Title>{title}</SpinCard.Title>
            </SpinCard.Back>
          </SpinCard.Content>

          <SpinCard.Border />
        </SpinCard>
      ))}
    </SpinCard.Group>
  );
};
