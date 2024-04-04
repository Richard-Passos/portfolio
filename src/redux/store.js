import { configureStore } from '@reduxjs/toolkit';

import cursorSlice from './cursorSlice';
import followPointerSlice from './followPointerSlice';
import headerSlice from './headerSlice';

const store = configureStore({
  reducer: {
    [cursorSlice.name]: cursorSlice.reducer,
    [followPointerSlice.name]: followPointerSlice.reducer,
    [headerSlice.name]: headerSlice.reducer,
  },
});

export default store;
