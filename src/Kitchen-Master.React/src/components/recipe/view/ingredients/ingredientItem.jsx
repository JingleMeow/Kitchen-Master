import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { getIngredientIcon } from '_/utils/recipeUtils';
import styles from './ingredientItem.module.scss';

const IngredientItem = ({ recipeIngredient, index }) => {
    const { ingredient } = recipeIngredient;
    const itemClassName = classNames({
        [styles.ingredientItem]: true,
        [styles.altBackground]: index % 2 === 0
    });
    return (
        <div className={itemClassName}>
            <div className={styles.iconCell}>
                <FontAwesomeIcon icon={getIngredientIcon(ingredient.type)} color='#a2cf6e' className={styles.icon} />
            </div>
            <div className={styles.textCell}>
                {ingredient.name}
            </div>
            <div className={styles.amountCell}>
                <Label color='orange'>
                    <div className={styles.amountValue}>{recipeIngredient.amount}</div>
                    <div className={styles.amountUnit}>{recipeIngredient.unit.label}</div>
                </Label>
            </div>
        </div>
    );
}

IngredientItem.propTypes = {
    recipeIngredient: PropTypes.object.isRequired
}

export default IngredientItem;