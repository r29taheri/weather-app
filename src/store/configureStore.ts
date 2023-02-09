import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import { initialState as currentCityInitialState } from "./reducers/currentCitySlice";
import { rootReducer } from "./reducers/rootReducer";
import storage from "./storage";

const getDefaultStates = () => ({
  currentCity: currentCityInitialState,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentCity"],
  blacklist: [],
};

const initializeStore = (preloadedState?: any) =>
  configureStore({
    reducer: {
      reducer: persistReducer<any>(persistConfig, rootReducer),
      preloadedState: preloadedState || getDefaultStates(),
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export const store = initializeStore();
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
