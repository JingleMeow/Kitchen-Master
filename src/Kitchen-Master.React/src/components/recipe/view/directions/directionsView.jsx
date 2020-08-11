import React from 'react';
import _ from 'lodash';
import StepView from './stepView';

const DirectionsView = ({ directions }) => {
    return (
        _.sortBy(directions, d => d.order).map(
            direction =>
                <StepView key={direction.id} direction={direction} />
        )
    );
}

export default DirectionsView;