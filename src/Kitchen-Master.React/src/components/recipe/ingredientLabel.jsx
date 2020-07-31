import React, { Component } from 'react';
import { Header, Label, Icon, Divider } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import styles from './ingredientLabel.module.scss';

class IngredientLabel extends Component {
    state = {}
    render() {
        return (
            <Label size='large' className={styles.label}>
                <FontAwesomeIcon icon={faBreadSlice} pull='left' />
                Asparagus
                <Icon name='delete' />
            </Label>
        );
    }
}

export default IngredientLabel;