import { useSelector as useReduxSelector } from 'react-redux';

import { RootState } from './root';

export const useSelector = useReduxSelector.withTypes<RootState>();
