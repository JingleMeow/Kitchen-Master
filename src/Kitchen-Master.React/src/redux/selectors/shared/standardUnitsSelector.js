import { createSelector } from 'reselect';
import _ from 'lodash';
import unitsSelector from './unitsSelector';

export default createSelector(
    unitsSelector,
    units => _.sortBy(units.filter(x => x.coefficient === 1), u => u.unitCategory)
)
