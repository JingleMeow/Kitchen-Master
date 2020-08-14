import React, { Fragment } from 'react';
import { Label } from 'semantic-ui-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { difficultiesSelector } from '_/redux/selectors/shared'
import styles from './difficultyLabel.module.scss';
import { connect } from 'react-redux';

const DifficultyLabel = ({ difficultyLevel, difficulties, ...props }) => {
    const className = classNames({
        [styles.easy]: difficultyLevel === 1,
        [styles.medium]: difficultyLevel === 2,
        [styles.hard]: difficultyLevel === 3
    });
    const label = difficulties.find(x => x.value === difficultyLevel).label;
    return (
        <Label className={className} {...props}>{label}</Label>
    );
}

DifficultyLabel.propTypes = {
    difficultyLevel: PropTypes.number.isRequired
}

const mapStateToProps = state => {
    return {
        difficulties: difficultiesSelector(state)
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyLabel);