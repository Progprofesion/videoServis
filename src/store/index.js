import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './reducer/dataSlice';
// import { apiSlice } from '../components/api/apiSlice';

const store = configureStore({
    reducer: {
        dataSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;