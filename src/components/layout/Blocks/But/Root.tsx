import { ScrollAnimate, Text, Title } from '@/components/atoms';
import CleanLayout, {
  CleanLayoutProps
} from '@/components/layout/wrappers/Clean';
import { TextScrollAnimate } from '@/components/molecules';
import { ScrollAnimateConfigOptions } from '@/components/motion/ScrollAnimate';
import { TextScrollAnimateProps } from '@/components/motion/TextScrollAnimate';
import { TextProps } from '@/components/system/Text';
import { TitleProps } from '@/components/system/Title';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  x: {
    scrollConfig: {
      offset: ['-.5 .5', '0 .5']
    },
    prop: '--x',
    propPoints: ['-101%', '0%']
  } as ScrollAnimateConfigOptions,
  clipPath: {
    scrollConfig: {
      offset: ['.5 .5', '.75 .5']
    },
    prop: '--clip-path',
    propPoints: ['inset(0% -100% 0 0)', 'inset(100% -100% 0 0)']
  } as ScrollAnimateConfigOptions,
  y: {
    scrollConfig: {
      offset: ['.5 .5', '1 .5']
    },
    prop: '--y',
    propPoints: ['0%', '50%']
  } as ScrollAnimateConfigOptions,
  top: {
    scrollConfig: {
      offset: ['-1 .5', '0 .5']
    },
    prop: '--top',
    propPoints: ['0%', '-50%']
  } as ScrollAnimateConfigOptions
};

type ButBlockOwnProps = {
  data: {
    title: string;
    description: TextScrollAnimateProps['text'];
  };
  titleProps?: Partial<TextProps>;
  descriptionProps?: Partial<TitleProps>;
};

type ButBlockProps = MergeProps<ButBlockOwnProps, CleanLayoutProps>;

const ButBlock = ({
  data,
  className,
  titleProps,
  descriptionProps,
  ...props
}: ButBlockProps) => {
  return (
    <CleanLayout
      className={cn(
        `3xl:min-h-[calc(var(--max-height-bounds)*1.5)] grid min-h-[150svh] grid-rows-3 items-stretch justify-stretch justify-items-center`,
        className
      )}
      {...props}
    >
      <ScrollAnimate config={ANIMATION_CONFIG.x}>
        <ScrollAnimate config={ANIMATION_CONFIG.clipPath}>
          <ScrollAnimate config={ANIMATION_CONFIG.y}>
            <div className='row-span-2 flex translate-y-(--y) items-center justify-center py-4 [clip-path:inset(0_-100%_0_0)]'>
              <Text
                {...titleProps}
                className={cn(
                  `relative translate-x-(--x) text-[clamp(8rem,44vw,32rem)]/none font-bold tracking-tighter uppercase`,
                  titleProps?.className
                )}
              >
                <em className='text-gray-3'>{data.title}</em>

                <span
                  aria-hidden
                  className='pointer-events-none absolute left-0 select-none [clip-path:var(--clip-path)]'
                >
                  {data.title}
                </span>
              </Text>
            </div>
          </ScrollAnimate>
        </ScrollAnimate>
      </ScrollAnimate>

      <ScrollAnimate config={ANIMATION_CONFIG.top}>
        <div className='w-9by10 flex items-center justify-center'>
          <Title
            component='p'
            order={1}
            {...descriptionProps}
            className={cn(
              'relative top-(--top) text-center font-medium',
              descriptionProps?.className
            )}
          >
            <TextScrollAnimate
              className='justify-center'
              text={data.description}
            />
          </Title>
        </div>
      </ScrollAnimate>
    </CleanLayout>
  );
};

export { ButBlock };
export type { ButBlockProps };
