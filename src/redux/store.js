import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { block1 } from "./block1/block1-reducers";
import { block2 } from "./block2/block2-reducers";
import { block3 } from "./block3/block3-reducers";
import { lang } from "./lang/lang-reducer";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: "archetypes",
  storage: storageSession,
};

const rootReducer = combineReducers({ block1, block2, block3, lang });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
