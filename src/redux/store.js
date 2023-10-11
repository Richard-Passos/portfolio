import { configureStore } from '@reduxjs/toolkit';

import cursorSlice from './cursorSlice';
import followPointerSlice from './followPointerSlice';

const store = configureStore({
  reducer: {
    [cursorSlice.name]: cursorSlice.reducer,
    [followPointerSlice.name]: followPointerSlice.reducer,
  },
});

export default store;
