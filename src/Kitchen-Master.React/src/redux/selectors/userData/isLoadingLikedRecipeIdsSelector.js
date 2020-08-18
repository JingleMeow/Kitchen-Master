import { createSelector } from 'reselect'

export default createSelector(
    state => state.userData,
    userData => userData.isLoadingLikedRecipeIds
)