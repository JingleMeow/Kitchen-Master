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

export function parseDifficulty(input) {
    const difficulty = Number.parseInt(input);
    if (Number.isInteger(difficulty) && difficulty >= 1 && difficulty <= 3)
        return difficulty;
    else
        return -1;
}

export function parseSpicy(input) {
    const spicy = Number.parseInt(input);
    if (Number.isInteger(spicy) && spicy >= 0 && spicy <= 4)
        return spicy;
    else
        return -1;
}

export function parseAuthorId(input) {
    const authorId = Number.parseInt(input);
    if (Number.isInteger(authorId) && authorId > 0)
        return authorId;
    else
        return -1;
}
