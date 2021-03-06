import apiCallbackAction from '../../apiCallbackAction';
import setRecipeListAction from './setRecipeListAction';

export default function searchRecipesAction(query) {
    return dispatch => new Promise((resolve, reject) => {
        dispatch(apiCallbackAction.getWithParam('recipe/search', fixQueryParameters(query), true))
            .then(response => {
                dispatch(setRecipeListAction(response.data));
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function fixQueryParameters(query) {
    const newQuery = {};
    if (query.queryText)
        newQuery.queryText = query.queryText;
    if (query.difficulty >= 0)
        newQuery.difficulty = query.difficulty;
    if (query.spicy >= 0)
        newQuery.spicy = query.spicy;
    if (query.authorId > 0)
        newQuery.authorId = query.authorId;
    if (query.likeByUserId)
        newQuery.likeByUserId = query.likeByUserId;
    return newQuery;
}
