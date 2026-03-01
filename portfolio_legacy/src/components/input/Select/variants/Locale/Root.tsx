'use client';

import { Select } from '@/components/input/Select';
import { SelectProps } from '@/components/input/Select';
import { GlobeIcon } from '@/components/system/Icon/variants';
import { GlobeIconProps } from '@/components/system/Icon/variants/Globe';
import { useLocale, usePathname, useRouter } from '@/i18n/navigation';
import { MergeProps } from '@/types';
import { cn, isLocale } from '@/utils';

type LocaleSelectRootProps = MergeProps<
  {
    leftSectionProps?: Partial<GlobeIconProps>;
  },
  SelectProps
>;

const LocaleSelectRoot = ({
  className,
  leftSectionProps,
  ...props
}: LocaleSelectRootProps) => {
  const locale = useLocale(),
    router = useRouter(),
    pathname = usePathname();

  return (
    <Select
      allowDeselect={false}
      className={cn(`max-w-40 [&_input]:text-ellipsis`, className)}
      defaultValue={locale}
      leftSection={
        <GlobeIcon
          {...leftSectionProps}
          className={cn('aspect-square h-2/3', leftSectionProps?.className)}
        />
      }
      leftSectionPointerEvents='none'
      {...props}
      onChange={(locale, options) => {
        if (!isLocale(locale)) return;

        router.replace(`${pathname}`, { locale });

        props.onChange?.(locale, options);
      }}
    />
  );
};

export { LocaleSelectRoot };
export type { LocaleSelectRootProps };
