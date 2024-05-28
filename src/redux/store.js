import { configureStore } from '@reduxjs/toolkit';
import ScrollSlice from './slice/ScrollSlice';

const store = configureStore({
    reducer: {
        scroll: ScrollSlice,
    },
});
store.subscribe(() => {
    console.log(store.getState());
});

export default store;
