import { createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
    name: 'scroll',
    initialState: {
        scroll: 0,
    },
    reducers: {
        setScroll: (state, action) => {
            if (state.scroll === 0) {
                state.scroll = action.payload;
            }
            return state.scroll;
        },
    },
});

export const { setScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
