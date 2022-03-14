import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { block1 } from "./block1/block1-reducers";
import {
  // persistReducer,
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storageSession from 'redux-persist/lib/storage/session'

// const persistConfig = {
//   key: "archetypes",
//   storage,
//   blacklist: ['test/smt'],
// };

const rootReducer = combineReducers({ block1 });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
