import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { values } from '@/utils';

import slices from './slices';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers(
  values(slices).reduce(
    (obj, slice) => ({
      ...obj,
      [slice.name]: slice.reducer
    }),
    {}
  ) as {
    [K in keyof typeof slices]: (typeof slices)[K]['reducer'];
  }
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export default store;
export { persistor };
export type { RootState, AppDispatch };
