import { api } from "./it/state/api";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./it/state";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./it/state/api/user";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [userApi.reducerPath]: userApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware, userApi.middleware),
});
setupListeners(store.dispatch);
