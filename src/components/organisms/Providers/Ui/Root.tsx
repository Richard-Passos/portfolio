'use client';

import { MantineProvider, MantineProviderProps } from '@mantine/core';

import theme, { defaultColorScheme } from '@/styles/theme';

type ProvidersUiOrganismOwnProps = {};

type ProvidersUiOrganismProps = ProvidersUiOrganismOwnProps &
  Omit<MantineProviderProps, keyof ProvidersUiOrganismOwnProps>;

const ProvidersUiOrganism = (props: ProvidersUiOrganismProps) => {
  return (
    <MantineProvider
      defaultColorScheme={defaultColorScheme}
      theme={theme}
      withStaticClasses={false}
      withGlobalClasses={false}
      {...props}
    />
  );
};

export default ProvidersUiOrganism;
export type { ProvidersUiOrganismProps };
