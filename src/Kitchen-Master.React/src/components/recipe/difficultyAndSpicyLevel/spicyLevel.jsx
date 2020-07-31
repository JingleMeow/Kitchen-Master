import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'
import styles from './spicyLevel.module.scss';

class SpicyLevel extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <span>Spicy Level:</span>
                <span style={{ paddingLeft: '2em', verticalAlign: 'middle' }}>
                    <FontAwesomeIcon icon={faPepperHot} className={styles.pepper} />
                    <FontAwesomeIcon icon={faPepperHot} className={styles.pepper} />
                    <FontAwesomeIcon icon={faPepperHot} className={styles.pepper} />
                    <FontAwesomeIcon icon={faPepperHot} className={styles.pepper} />
                    <FontAwesomeIcon icon={faPepperHot} className={styles.pepper} />
                </span>
            </Fragment>
        );
    }
}

export default SpicyLevel;