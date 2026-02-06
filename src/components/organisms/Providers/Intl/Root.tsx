import { NextIntlClientProvider } from 'next-intl';
import { ComponentProps } from 'react';

type ProvidersIntlOrganismOwnProps = {};

type ProvidersIntlOrganismProps = ProvidersIntlOrganismOwnProps &
  Omit<
    ComponentProps<typeof NextIntlClientProvider>,
    keyof ProvidersIntlOrganismOwnProps
  >;

const ProvidersIntlOrganism = (props: ProvidersIntlOrganismProps) => {
  return <NextIntlClientProvider {...props} />;
};

export default ProvidersIntlOrganism;
export type { ProvidersIntlOrganismProps };
