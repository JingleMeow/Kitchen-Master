import { faDrumstickBite, faFish, faCarrot, faCheese, faBreadSlice, faDotCircle, faLemon, faFlask } from '@fortawesome/free-solid-svg-icons'

export function getImageUrl(imageId) {
    return `${process.env.API_IMAGE_URL}${imageId}.jpg`;
}

export function getIngredientIcon(ingredientType) {
    switch (ingredientType) {
        case 0:
            return faDrumstickBite;
        case 1:
            return faFish;
        case 2:
            return faCarrot;
        case 3:
            return faCheese;
        case 4:
            return faBreadSlice;
        case 5:
            return faDotCircle;
        case 99:
            return faFlask;
    }
}