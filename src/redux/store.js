import { configureStore } from '@reduxjs/toolkit';
import ScrollSlice from './slice/ScrollSlice';
import openSlice from './slice/openSlice';
import urlSlice from './slice/urlSlice';

const store = configureStore({
    reducer: {
        scroll: ScrollSlice,
        open: openSlice,
        url: urlSlice,
    },
});
store.subscribe(() => {
    console.log(store.getState());
});

export default store;
