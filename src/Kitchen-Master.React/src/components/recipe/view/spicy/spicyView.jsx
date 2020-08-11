import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './spicyView.module.scss';

const SpicyView = ({ spicyLevel }) => {
    return (
        <Fragment>
            <span style={{ verticalAlign: 'middle' }}>Spicy:</span>
            <span style={{ marginLeft: '1em', verticalAlign: 'middle' }}>
                {spicyLevel === 0 &&
                    <FontAwesomeIcon icon={faTimesCircle} className={styles.nonspicy} />}
                {spicyLevel > 0 &&
                    <FontAwesomeIcon icon={faPepperHot} className={styles.spicy} />}
                {spicyLevel > 1 &&
                    <FontAwesomeIcon icon={faPepperHot} className={styles.spicy} />}
                {(spicyLevel > 2) &&
                    <FontAwesomeIcon icon={faPepperHot} className={styles.spicy} />}
                {(spicyLevel > 3) &&
                    <FontAwesomeIcon icon={faPepperHot} className={styles.spicy} />}
            </span>
        </Fragment>
    );
}

SpicyView.propTypes = {
    spicyLevel: PropTypes.number.isRequired
}

export default SpicyView;