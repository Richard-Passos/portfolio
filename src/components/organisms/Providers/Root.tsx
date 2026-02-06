import { PropsWithChildren } from 'react';

import ProvidersIntl, { ProvidersIntlProps } from './Intl';
import ProvidersStore, { ProvidersStoreProps } from './Store';
import ProvidersUi, { ProvidersUiProps } from './Ui';

type ProvidersOrganismProps = PropsWithChildren<{
  storeProps?: Partial<ProvidersStoreProps>;
  intlProps?: Partial<ProvidersIntlProps>;
  uiProps?: Partial<ProvidersUiProps>;
}>;

const ProvidersOrganism = ({
  children,
  storeProps,
  intlProps,
  uiProps
}: ProvidersOrganismProps) => {
  return (
    <ProvidersStore {...storeProps}>
      <ProvidersIntl {...intlProps}>
        <ProvidersUi {...uiProps}>{children}</ProvidersUi>
      </ProvidersIntl>
    </ProvidersStore>
  );
};

export default ProvidersOrganism;
export type { ProvidersOrganismProps };
