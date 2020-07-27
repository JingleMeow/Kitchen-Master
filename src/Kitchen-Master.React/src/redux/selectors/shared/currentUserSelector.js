import { createSelector } from 'reselect';

export default createSelector(
    state => state.shared.currentUser,
    currentUser => currentUser
)
