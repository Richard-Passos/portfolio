import { forwardRef } from 'react';

import { Divider, Text, Title } from '@/components/atoms';
import { DividerProps } from '@/components/atoms/Divider';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { Service } from '@/types';
import { cn } from '@/utils';

type ServiceCardOrganismOwnProps = {
  data: Service;
  indexProps?: Partial<TextProps>;
  dividerProps?: Partial<DividerProps>;
  titleProps?: Partial<TitleProps>;
  descriptionProps?: Partial<TextProps>;
};

type ServiceCardOrganismProps = ServiceCardOrganismOwnProps &
  Omit<CardRootProps, keyof ServiceCardOrganismOwnProps>;

const ServiceCardOrganism = (
  {
    className,
    data,
    indexProps,
    dividerProps,
    titleProps,
    descriptionProps,
    ...props
  }: ServiceCardOrganismProps,
  ref: ServiceCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('border-transparent !bg-transparent', className)}
      ref={ref}
      {...props}
    >
      <Text
        component='span'
        {...indexProps}
        className={cn(
          'text-xs font-semibold text-dimmed',
          indexProps?.className
        )}
      >
        {data.slug}
      </Text>

      <Divider
        {...dividerProps}
        className={cn('mt-xs', dividerProps?.className)}
      />

      <Title
        component='h4'
        order={5}
        {...titleProps}
        className={cn('mt-lg', titleProps?.className)}
      >
        {data.title}
      </Title>

      <Text
        {...descriptionProps}
        className={cn(
          'mt-[calc(theme(spacing.xs)/2)] text-sm leading-relaxed text-dimmed',
          descriptionProps?.className
        )}
      >
        {data.description}
      </Text>
    </Card.Root>
  );
};

export default forwardRef(ServiceCardOrganism);
export type { ServiceCardOrganismProps };
