import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import GradientCard, { GradientCardProps } from '@/components/display/Card/Gradient';
import { PrimaryHeroCardProps } from '@/components/layout/Heros/Primary/Cards';

export type PrimaryHeroLeftProps = MergeProps<
  { gradient?: GradientCardProps['gradient'] } & PrimaryHeroCardProps,
  GradientCardProps
>;

export const PrimaryHeroLeft = ({
  icon,
  text,
  title,
  className,
  ...props
}: PrimaryHeroLeftProps) => {
  return (
    <GradientCard
      data-card
      className={cn('group md:col-span-6 lg:col-span-3', className)}
      gradient='radial-gradient(
            140% 140% at 0% 100%,
            #411073 0%,
            #0c1149 10%,
            #f00040 20%,
            transparent 60%
          )'
      {...props}
    >
      <GradientCard.Icon className='*:transition-transform *:duration-700 *:ease-backOut group-hover:*:rotate-y-360'>
        {icon}
      </GradientCard.Icon>

      <GradientCard.Title>{title}</GradientCard.Title>

      <GradientCard.Text>{text}</GradientCard.Text>
    </GradientCard>
  );
};
