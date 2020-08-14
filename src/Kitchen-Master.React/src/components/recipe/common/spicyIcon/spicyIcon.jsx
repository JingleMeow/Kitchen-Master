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
            <FontAwesomeIcon icon={faMinus} className={getClassName(0, spicyLevel)} />
            <FontAwesomeIcon icon={faPepperHot} className={getClassName(1, spicyLevel)} />
            <FontAwesomeIcon icon={faPepperHot} className={getClassName(2, spicyLevel)} />
            <FontAwesomeIcon icon={faPepperHot} className={getClassName(3, spicyLevel)} />
            <FontAwesomeIcon icon={faPepperHot} className={getClassName(4, spicyLevel)} />
            {/* {spicyLevel != 0 &&
                <Fragment>
                    <FontAwesomeIcon icon={faPepperHot} className={getClassName(1, spicyLevel)} />
                    <FontAwesomeIcon icon={faPepperHot} className={getClassName(2, spicyLevel)} />
                    <FontAwesomeIcon icon={faPepperHot} className={getClassName(3, spicyLevel)} />
                    <FontAwesomeIcon icon={faPepperHot} className={getClassName(4, spicyLevel)} />
                </Fragment>} */}
            {/* {spicyLevel === 0 &&
                <FontAwesomeIcon icon={faTimesCircle} className={getClassName(0, spicyLevel)} />}
            {spicyLevel > 0 &&
                <FontAwesomeIcon icon={faPepperHot} className={styles.spicy} />}
            {spicyLevel > 1 &&
                <FontAwesomeIcon icon={faPepperHot} className={styles.spicy} />}
            {(spicyLevel > 2) &&
                <FontAwesomeIcon icon={faPepperHot} className={styles.spicy} />}
            {(spicyLevel > 3) &&
                <FontAwesomeIcon icon={faPepperHot} className={styles.spicy} />} */}
        </div>
    );
}

SpicyIcon.propTypes = {
    spicyLevel: PropTypes.number.isRequired
}

export default SpicyIcon;

function getClassName(iconIndex, spicyLevel) {
    if (iconIndex === 0)
        return spicyLevel === iconIndex ? styles.nonspicy : styles.grey;
    else
        return spicyLevel >= iconIndex ? styles.spicy : styles.spicyGrey;
}