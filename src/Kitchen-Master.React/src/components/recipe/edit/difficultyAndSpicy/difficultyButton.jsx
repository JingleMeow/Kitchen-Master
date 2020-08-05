import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { firstLetterToUpper } from '../../../../utils/stringUtils';
import styles from './difficultyButton.module.scss';

class DifficultyButton extends Component {
    render() {
        const { difficulty } = this.props;
        const label = firstLetterToUpper(difficulty.label);
        return (
            <Button compact size='small' className={this.getDifficultyButtonClass()}
                onClick={this.handleButtonClick}>
                {label}
            </Button>
        );
    }

    handleButtonClick = event => {
        const { selected, difficulty, onClick } = this.props;
        if (!selected) {
            const data = {
                name: 'difficulty',
                value: difficulty.value
            }
            onClick(event, data);

        }
    }

    getDifficultyButtonClass() {
        const { difficulty, selected, readonly } = this.props;
        let difficultyClass;
        switch (difficulty.value) {
            case 1:
                difficultyClass = 'easy';
                break;
            case 2: difficultyClass = 'medium';
                break;
            case 3: difficultyClass = 'hard';
                break;
        }
        if (!selected) {
            difficultyClass += 'Light';
        }

        const className = classNames({
            [styles[difficultyClass]]: true,
            [styles.disabled]: readonly
        });
        return className;
    }
}

DifficultyButton.propTypes = {
    difficulty: PropTypes.object.isRequired,
    selected: PropTypes.bool,
    readonly: PropTypes.bool,
    onClick: PropTypes.func
}

export default DifficultyButton;
