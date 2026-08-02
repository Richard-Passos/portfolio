import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import GradientCard, { GradientCardProps } from '@/components/display/Card/Gradient';
import { PrimaryHeroCardProps } from '@/components/layout/Heros/Primary/Cards';

export type PrimaryHeroCenterProps = MergeProps<
  { gradient?: GradientCardProps['gradient'] } & PrimaryHeroCardProps,
  GradientCardProps
>;

export const PrimaryHeroCenter = ({
  icon,
  text,
  title,
  className,
  ...props
}: PrimaryHeroCenterProps) => {
  return (
    <GradientCard
      data-card
      className={cn('group min-h-64 md:col-span-full lg:col-span-6', className)}
      gradient='radial-gradient(
            140% 140% at 50% 0%,
            #f00040 0%,
            #f00040 25%,
            transparent 37.5%,
            #411073 50%,
            #0c1149 75%
          )'
      {...props}
    >
      <GradientCard.Icon className='*:transition-transform *:duration-700 *:ease-backOut group-hover:*:rotate-x-360'>
        {icon}
      </GradientCard.Icon>

      <GradientCard.Title>{title}</GradientCard.Title>

      <GradientCard.Text>{text}</GradientCard.Text>
    </GradientCard>
  );
};
