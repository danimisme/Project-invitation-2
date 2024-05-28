import { configureStore } from '@reduxjs/toolkit';
import ScrollSlice from './slice/ScrollSlice';
import openSlice from './slice/openSlice';

const store = configureStore({
    reducer: {
        scroll: ScrollSlice,
        open: openSlice,
    },
});
store.subscribe(() => {
    console.log(store.getState());
});

export default store;
