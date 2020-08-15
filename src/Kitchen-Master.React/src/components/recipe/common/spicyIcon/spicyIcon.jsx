import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPepperHot } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './spicyIcon.module.scss';

const SpicyIcon = ({ spicyLevel }) => {
    return (
        <div className={styles.icons}>
            {spicyLevel === 0 &&
                <FontAwesomeIcon icon={faMinus} className={styles.nonspicy} />
            }
            {spicyLevel > 0 &&
                <FontAwesomeIcon icon={faPepperHot} className={getClassName(1, spicyLevel)} />}
            {spicyLevel > 1 &&
                <FontAwesomeIcon icon={faPepperHot} className={getClassName(2, spicyLevel)} />}
            {(spicyLevel > 2) &&
                <FontAwesomeIcon icon={faPepperHot} className={getClassName(3, spicyLevel)} />}
            {(spicyLevel > 3) &&
                <FontAwesomeIcon icon={faPepperHot} className={getClassName(4, spicyLevel)} />}
        </div>
    );
}

SpicyIcon.propTypes = {
    spicyLevel: PropTypes.number.isRequired
}

export default SpicyIcon;

function getClassName(iconIndex, spicyLevel) {
    return spicyLevel >= iconIndex ? styles.spicy : styles.spicyGrey;
}