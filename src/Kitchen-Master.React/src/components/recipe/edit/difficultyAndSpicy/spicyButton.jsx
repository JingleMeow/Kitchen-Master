import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faBan } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './spicyButton.module.scss';

class SpicyButton extends Component {
    state = {}
    render() {
        const { spicy, onMouseEnter, onMouseLeave } = this.props;

        let icon, className;
        if (spicy.value == 0) {
            icon = faBan;
            className = this.getNonspicyButtonClass();
        } else {
            icon = faPepperHot;
            className = this.getSpicyButtonClass();
        }

        return (
            <FontAwesomeIcon icon={icon} className={className}
                onClick={this.handleButtonClick}
                onMouseEnter={() => onMouseEnter(spicy.value)}
                onMouseLeave={onMouseLeave} />
        );
    }

    handleButtonClick = event => {
        const { spicy, onClick } = this.props;
        const data = {
            name: 'spicy',
            value: spicy.value
        }
        onClick(event, data);
    }

    getNonspicyButtonClass() {
        const { spicy, spicyLevel, readonly } = this.props;
        let spicyClass = 'nonspicy';
        if (spicyLevel !== spicy.value)
            spicyClass += 'Light';
        return classNames({
            [styles[spicyClass]]: true,
            [styles.disabled]: readonly
        });
    }

    getSpicyButtonClass() {
        const { spicy, spicyLevel, readonly } = this.props;
        let spicyClass = 'spicy';
        if (spicyLevel < spicy.value)
            spicyClass += 'Light';
        return classNames({
            [styles[spicyClass]]: true,
            [styles.disabled]: readonly
        });
    }
}

SpicyButton.propTypes = {
    spicy: PropTypes.object.isRequired,
    spicyLevel: PropTypes.number.isRequired,
    readonly: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
}

export default SpicyButton;