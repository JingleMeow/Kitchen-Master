import { createSlice } from '@reduxjs/toolkit'

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        likedRecipeIds: null,
        isLoadingLikedRecipeIds: false,
        userMenu: [],
    },
    reducers: {
        setLikedRecipeIds: (state, { payload }) => {
            state.likedRecipeIds = payload
        },
        addLikeRecipe: (state, { payload }) => {
            if (!state.likedRecipeIds.includes(payload))
                state.likedRecipeIds.push(payload);
        },
        removeLikedRecipe: (state, { payload }) => {
            const index = state.likedRecipeIds.indexOf(payload);
            if (index >= 0)
                state.likedRecipeIds.splice(index, 1);
        },
        setLoadingLikedRecipeIds: (state, { payload }) => {
            state.isLoadingLikedRecipeIds = payload;
        },
        setUserMenu: (state, { payload }) => {
            state.userMenu = payload;
        },
        addMenuRecipe: (state, { payload }) => {
            state.userMenu.push(payload);
        },
        removeMenuRecipe: (state, { payload }) => {
            const index = state.userMenu.findIndex(x => x.id === payload);
            if (index >= 0)
                state.userMenu.splice(index, 1);
        }
    }
});

export const {
    setLikedRecipeIds,
    addLikeRecipe,
    removeLikedRecipe,
    setLoadingLikedRecipeIds,
    setUserMenu,
    addMenuRecipe,
    removeMenuRecipe } = userDataSlice.actions;
export default userDataSlice.reducer;
