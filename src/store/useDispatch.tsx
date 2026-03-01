import { useDispatch as useReduxDispatch } from 'react-redux';

import { AppDispatch } from './root';

export const useDispatch = useReduxDispatch.withTypes<AppDispatch>();
