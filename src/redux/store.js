import { configureStore } from "@reduxjs/toolkit";
import { reportsApi } from "./reportsApi";

export const store = configureStore({
    reducer: {
        [reportsApi.reducerPath]: reportsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reportsApi.middleware)
})