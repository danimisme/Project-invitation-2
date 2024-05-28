import { createSlice } from '@reduxjs/toolkit';

const openSlice = createSlice({
    name: 'open',
    initialState: {
        open: false,
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
    },
});

export const { setOpen } = openSlice.actions;
export default openSlice.reducer;
