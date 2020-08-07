import { createSelector } from 'reselect';

export default createSelector(
    state => state.shared.definitions,
    definitions => definitions.ingredientTypes
)
