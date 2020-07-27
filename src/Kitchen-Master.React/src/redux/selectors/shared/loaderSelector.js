import { createSelector } from 'reselect';

export default createSelector(
    state => state.shared.isLoading,
    isLoading => isLoading
);
