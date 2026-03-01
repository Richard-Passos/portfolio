import { Text } from '@/components/atoms';
import CleanLayout, {
  CleanLayoutProps
} from '@/components/layout/wrappers/Clean';
import Icons, { IconsProps } from '@/components/misc/IconsPair';
import { TextScrollAnimate } from '@/components/molecules';
import { TextScrollAnimateProps } from '@/components/motion/TextScrollAnimate';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type CtaTextBlockOwnProps = {
  data: {
    description: TextScrollAnimateProps['text'];
    icons: {
      left: IconsProps['left'];
      right: IconsProps['right'];
    };
  };
};

type CtaTextBlockProps = MergeProps<CtaTextBlockOwnProps, CleanLayoutProps>;

const CtaTextBlock = ({ data, className, ...props }: CtaTextBlockProps) => {
  return (
    <CleanLayout
      className={cn('3xl:min-h-bounds min-h-svh', className)}
      {...props}
    >
      <Text className='w-9by10 relative z-10 max-w-5xl text-center text-2xl leading-tight! font-semibold sm:text-4xl lg:text-[3.25rem]'>
        <TextScrollAnimate text={data.description} />
      </Text>

      <Icons
        left={data.icons.left}
        right={data.icons.right}
      />
    </CleanLayout>
  );
};

export { CtaTextBlock };
export type { CtaTextBlockProps };
