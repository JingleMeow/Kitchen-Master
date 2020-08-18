import { createSlice } from '@reduxjs/toolkit'

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        likedRecipeIds: null,
        isLoadingLikedRecipeIds: false,
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
        }
    }
});

export const {
    setLikedRecipeIds,
    addLikeRecipe,
    removeLikedRecipe,
    setLoadingLikedRecipeIds } = userDataSlice.actions;
export default userDataSlice.reducer;
