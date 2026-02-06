import CleanLayouts, { CleanLayoutsProps } from '@/components/Layouts/Clean';
import { Text } from '@/components/atoms';
import { TextScrollAnimate } from '@/components/molecules';
import { TextScrollAnimateProps } from '@/components/molecules/TextScrollAnimate';
import Icons, { IconsProps } from '@/components/organisms/Icons';
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

type CtaTextBlockProps = CtaTextBlockOwnProps &
  Omit<CleanLayoutsProps, keyof CtaTextBlockOwnProps>;

const CtaTextBlock = ({ data, className, ...props }: CtaTextBlockProps) => {
  return (
    <CleanLayouts
      className={cn(`3xl:min-h-bounds min-h-svh`, className)}
      {...props}
    >
      <Text className='w-9by10 relative z-10 max-w-5xl text-center text-2xl leading-tight! font-semibold sm:text-4xl lg:text-[3.25rem]'>
        <TextScrollAnimate text={data.description} />
      </Text>

      <Icons
        left={data.icons.left}
        right={data.icons.right}
      />
    </CleanLayouts>
  );
};

export default CtaTextBlock;
export type { CtaTextBlockProps };
