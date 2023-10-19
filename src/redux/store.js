import { configureStore } from "@reduxjs/toolkit";
import { reportsApi } from "./reportsApi";
import { projectsApi } from "./projectsApi";
import { usersApi } from "./usersApi";
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        [reportsApi.reducerPath]: reportsApi.reducer,
        [projectsApi.reducerPath]: projectsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware).concat(usersApi.middleware).concat(reportsApi.middleware),
})