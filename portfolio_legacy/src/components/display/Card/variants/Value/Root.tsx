import { Icon, Text, Title } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/display/Card';
import { IconProps } from '@/components/system/Icon';
import { TextProps } from '@/components/system/Text';
import { TitleProps } from '@/components/system/Title';
import { Value } from '@/types';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type ValueCardOwnProps = {
  data: Value;
  iconProps?: Partial<IconProps>;
  titleProps?: Partial<TitleProps>;
  descriptionProps?: Partial<TextProps>;
};

type ValueCardProps = MergeProps<ValueCardOwnProps, CardRootProps>;

const ValueCard = ({
  className,
  data,
  iconProps,
  titleProps,
  descriptionProps,
  ...props
}: ValueCardProps) => {
  return (
    <Card.Root
      className={cn('min-h-52', className)}
      {...props}
    >
      <div className='bg-gray-0 dark:bg-dark-6 flex size-12 items-center justify-center rounded-sm'>
        <Icon
          src={data.icon}
          {...iconProps}
          className={cn('size-1/2', iconProps?.className)}
        />
      </div>

      <Title
        component='h4'
        order={5}
        {...titleProps}
        className={cn('mt-8', titleProps?.className)}
      >
        {data.title}
      </Title>

      <Text
        {...descriptionProps}
        className={cn(
          'text-dimmed mt-[calc(--spacing(2.5)/2)] leading-relaxed',
          descriptionProps?.className
        )}
      >
        {data.description}
      </Text>
    </Card.Root>
  );
};

export { ValueCard };
export type { ValueCardProps };
