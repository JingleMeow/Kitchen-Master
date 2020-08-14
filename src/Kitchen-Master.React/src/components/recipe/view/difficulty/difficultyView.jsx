import React, { Fragment } from 'react';
import { Label } from 'semantic-ui-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DifficultyLabel from '../../common/difficultyLabel/difficultyLabel';
import styles from './difficultyView.module.scss';

const DifficultyView = ({ difficultyLevel }) => {
    const className = classNames({
        [styles.easy]: difficultyLevel === 1,
        [styles.medium]: difficultyLevel === 2,
        [styles.hard]: difficultyLevel === 3
    });
    return (
        <Fragment>
            <span style={{ verticalAlign: 'middle' }}>Difficulty:</span>
            <span style={{ marginLeft: '1em', verticalAlign: 'middle' }}>
                <DifficultyLabel difficultyLevel={difficultyLevel} />
            </span>
        </Fragment>
    );
}

DifficultyView.propTypes = {
    difficultyLevel: PropTypes.number.isRequired
}

export default DifficultyView;