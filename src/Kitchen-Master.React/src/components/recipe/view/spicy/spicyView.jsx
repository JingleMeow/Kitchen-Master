import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SpicyIcon from '../../common/spicyIcon/spicyIcon';

const SpicyView = ({ spicyLevel }) => {
    return (
        <Fragment>
            <span style={{ verticalAlign: 'middle' }}>Spicy:</span>
            <span style={{ marginLeft: '1em', verticalAlign: 'middle' }}>
                <SpicyIcon spicyLevel={spicyLevel} />
            </span>
        </Fragment>
    );
}

SpicyView.propTypes = {
    spicyLevel: PropTypes.number.isRequired
}

export default SpicyView;