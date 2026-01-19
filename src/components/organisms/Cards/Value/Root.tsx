import { Icon, Text, Title } from '@/components/atoms';
import { IconProps } from '@/components/atoms/Icon';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { Value } from '@/types';
import { cn } from '@/utils';

type ValueCardOrganismOwnProps = {
  data: Value;
  iconProps?: Partial<IconProps>;
  titleProps?: Partial<TitleProps>;
  descriptionProps?: Partial<TextProps>;
};

type ValueCardOrganismProps = ValueCardOrganismOwnProps &
  Omit<CardRootProps, keyof ValueCardOrganismOwnProps>;

const ValueCardOrganism = ({
  className,
  data,
  iconProps,
  titleProps,
  descriptionProps,
  ...props
}: ValueCardOrganismProps) => {
  return (
    <Card.Root
      className={cn('min-h-52', className)}
      {...props}
    >
      <div
        className={`bg-gray-0 dark:bg-dark-6 flex size-12 items-center justify-center rounded-sm`}
      >
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
        className={cn('mt-xl', titleProps?.className)}
      >
        {data.title}
      </Title>

      <Text
        {...descriptionProps}
        className={cn(
          'mt-[calc(theme(spacing.xs)/2)] text-dimmed leading-relaxed',
          descriptionProps?.className
        )}
      >
        {data.description}
      </Text>
    </Card.Root>
  );
};

export default ValueCardOrganism;
export type { ValueCardOrganismProps };
