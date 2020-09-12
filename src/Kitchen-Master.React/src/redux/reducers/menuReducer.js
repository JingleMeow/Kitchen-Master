import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        historyMenus: [],
        viewingMenu: null
    },
    reducers: {
        setViewingMenu: (state, { payload }) => {
            state.viewingMenu = payload
        }
    }
});

export const {
    setViewingMenu
} = menuSlice.actions;

export default menuSlice.reducer;
