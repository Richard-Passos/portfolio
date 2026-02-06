import ProvidersIntl, { ProvidersIntlProps } from './Intl';
import ProvidersRoot, {
  ProvidersOrganismProps as ProvidersRootProps
} from './Root';
import ProvidersStore, { ProvidersStoreProps } from './Store';
import ProvidersUi, { ProvidersUiProps } from './Ui';

const Providers = {
  Root: ProvidersRoot,
  Intl: ProvidersIntl,
  Store: ProvidersStore,
  Ui: ProvidersUi
};

export default Providers;
export { ProvidersRoot, ProvidersIntl, ProvidersStore, ProvidersUi };
export type {
  ProvidersRootProps,
  ProvidersIntlProps,
  ProvidersStoreProps,
  ProvidersUiProps
};
