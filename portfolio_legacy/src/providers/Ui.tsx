'use client';

import { MantineProvider, MantineProviderProps } from '@mantine/core';

import theme, { defaultColorScheme } from '@/styles/theme';

type UiProviderProps = MantineProviderProps;

const UiProvider = (props: UiProviderProps) => {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme={defaultColorScheme}
      withStaticClasses={false}
      withGlobalClasses={false}
      {...props}
    />
  );
};

export { UiProvider };
export type { UiProviderProps };
