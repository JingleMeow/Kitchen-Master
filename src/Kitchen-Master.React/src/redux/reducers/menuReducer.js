import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        historyMenus: [],
        viewingMenu: null
    },
    reducers: {
        setHistoryMenus: (state, { payload }) => {
            state.historyMenus = payload
        },
        setViewingMenu: (state, { payload }) => {
            state.viewingMenu = payload
        }
    }
});

export const {
    setHistoryMenus,
    setViewingMenu
} = menuSlice.actions;

export default menuSlice.reducer;
