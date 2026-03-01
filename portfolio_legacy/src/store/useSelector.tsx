import { useSelector } from 'react-redux';

import { RootState } from './root';

export default useSelector.withTypes<RootState>();
