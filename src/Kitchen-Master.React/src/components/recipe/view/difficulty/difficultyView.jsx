import React, { Fragment } from 'react';
import { Label } from 'semantic-ui-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { difficultiesSelector } from '../../../../redux/selectors/shared'
import styles from './difficultyView.module.scss';
import { connect } from 'react-redux';

const DifficultyView = ({ difficultyLevel, difficulties }) => {
    const className = classNames({
        [styles.easy]: difficultyLevel === 1,
        [styles.medium]: difficultyLevel === 2,
        [styles.hard]: difficultyLevel === 3
    });
    const difficultyLabel = difficulties.find(x => x.value === difficultyLevel).label;
    return (
        <Fragment>
            <span style={{ verticalAlign: 'middle' }}>Difficulty:</span>
            <span style={{ marginLeft: '1em', verticalAlign: 'middle' }}>
                <Label className={className}>{difficultyLabel}</Label>
            </span>
        </Fragment>
    );
}

DifficultyView.propTypes = {
    difficultyLevel: PropTypes.number.isRequired
}

const mapStateToProps = state => {
    return {
        difficulties: difficultiesSelector(state)
    }
}

export default connect(mapStateToProps, null)(DifficultyView);