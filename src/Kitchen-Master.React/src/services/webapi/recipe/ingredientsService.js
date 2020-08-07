import kmApi from '../kmApiRequest';

export function addIngredient(ingredient) {
    return kmApi.post('ingredient', ingredient);
}

export function searchIngredients(searchText) {
    return kmApi.get(`ingredient/search/${searchText}`);
}