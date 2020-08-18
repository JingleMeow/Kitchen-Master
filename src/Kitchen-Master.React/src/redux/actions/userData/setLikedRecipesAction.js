import { SET_LIKED_RECIPES } from '../../reducers/userDataReducer';

export default function setLikedRecipesAction(likedRecipes) {
    return {
        type: SET_LIKED_RECIPES,
        payload: likedRecipes
    }
}