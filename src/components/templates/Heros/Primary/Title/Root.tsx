import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { cn, serialize } from '@/utils';

type PrimaryHeroTemplateTitleOrganismOwnProps = {
  children: Parameters<typeof serialize>['0'];
};

type PrimaryHeroTemplateTitleOrganismProps =
  PrimaryHeroTemplateTitleOrganismOwnProps &
    Omit<TitleProps, keyof PrimaryHeroTemplateTitleOrganismOwnProps>;

const PrimaryHeroTemplateTitleOrganism = ({
  className,
  children,
  ...props
}: PrimaryHeroTemplateTitleOrganismProps) => {
  return (
    <Title
      className={cn(
        `w-full tracking-tighter wrap-break-word uppercase lg:leading-none`,
        className
      )}
      order={1}
      {...props}
    >
      {serialize(children, {
        paragraph: {
          'aria-hidden': true,
          className:
            'mt-auto max-w-md text-start font-display text-[.15em]/normal font-medium normal-case tracking-normal -translate-y-3.5 max-lg:hidden'
        },
        alignText: {
          className: cn(
            'flex w-full flex-wrap justify-center gap-x-[.2em] !text-center',
            'lg:data-[align=left]:justify-start',
            'lg:data-[align=center]:justify-evenly',
            'lg:data-[align=right]:justify-end'
          )
        }
      })}
    </Title>
  );
};

export default PrimaryHeroTemplateTitleOrganism;
export type { PrimaryHeroTemplateTitleOrganismProps };
