/* Core */
import {
  configureStore,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

/* Instruments */
import { reducer } from "../reducers";
import { middleware } from '../middlewares'

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});

setupListeners(reduxStore.dispatch);