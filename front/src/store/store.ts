import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { api } from "./api";


const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(api.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;