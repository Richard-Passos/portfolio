import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { heightSlice, themeSlice } from './slices';

const slices = [themeSlice, heightSlice];

const rootReducer = combineReducers(
  slices.reduce(
    (obj, slice) => ({
      ...obj,
      [slice.name]: slice.reducer
    }),
    {} as {
      [S in (typeof slices)[number] as S['name']]: S['reducer'];
    }
  )
);

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
