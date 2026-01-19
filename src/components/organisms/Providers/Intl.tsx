import { NextIntlClientProvider } from 'next-intl';
import { ComponentProps } from 'react';

type IntlProviderOrganismOwnProps = {};

type IntlProviderOrganismProps = IntlProviderOrganismOwnProps &
  Omit<
    ComponentProps<typeof NextIntlClientProvider>,
    keyof IntlProviderOrganismOwnProps
  >;

const IntlProviderOrganism = (props: IntlProviderOrganismProps) => {
  return <NextIntlClientProvider {...props} />;
};

export default IntlProviderOrganism;
export type { IntlProviderOrganismProps };
