import store, { AppDispatch, RootState, persistor } from './root';
import useDispatch from './useDispatch';
import useSelector from './useSelector';

export default store;
export { useDispatch, useSelector, persistor };
export type { AppDispatch, RootState };
