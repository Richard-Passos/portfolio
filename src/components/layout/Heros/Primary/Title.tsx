import { Title, TitleProps } from '@/components/system';
import { MergeProps } from '@/types';
import { Node, cn, serialize } from '@/utils';

type PrimaryHeroTitleProps = MergeProps<{ children: Node[] }, TitleProps>;

const PrimaryHeroTitle = ({
  className,
  children,
  ...props
}: PrimaryHeroTitleProps) => {
  return (
    <Title
      className={cn(
        'w-full tracking-tighter wrap-break-word uppercase lg:leading-none',
        className
      )}
      order={1}
      {...props}
    >
      {serialize(children, {
        paragraph: {
          'aria-hidden': true,
          className:
            'mt-auto max-w-md basis-0 grow text-start font-display text-[.15em]/normal font-medium normal-case tracking-normal -translate-y-3.5 max-lg:hidden'
        },
        alignText: {
          className: cn(
            'flex w-full justify-center flex-wrap gap-x-[.2em] text-center! [word-break:break-word]',
            'lg:data-[align=left]:justify-start',
            'lg:data-[align=center]:justify-evenly',
            'lg:data-[align=right]:justify-end'
          )
        }
      })}
    </Title>
  );
};

export { PrimaryHeroTitle };
export type { PrimaryHeroTitleProps };
