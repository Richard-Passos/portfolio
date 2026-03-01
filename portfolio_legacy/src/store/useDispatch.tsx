import { useDispatch } from 'react-redux';

import { AppDispatch } from './root';

export default useDispatch.withTypes<AppDispatch>();
