import React, { Fragment } from 'react';
import { GridColumn, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import IngredientItem from './ingredientItem';
import styles from './ingredientView.module.scss';

const IngredientView = ({ recipeIngredients }) => {
    const middleIndex = Math.ceil(recipeIngredients.length / 2);
    const leftSideIngredients = recipeIngredients.slice(0, middleIndex);
    const rightSideIngredients =
        recipeIngredients.length > 1 ? recipeIngredients.slice(middleIndex) : [];
    return (
        <Fragment>
            <div className={styles.leftColumn}>
                {leftSideIngredients.map((recipeIngredient, index) =>
                    <IngredientItem key={index} recipeIngredient={recipeIngredient} index={index} />
                )}
            </div>
            {rightSideIngredients.length > 0 &&
                <div className={styles.rightColumn}>
                    {rightSideIngredients.map((recipeIngredient, index) =>
                        <IngredientItem key={index} recipeIngredient={recipeIngredient} index={leftSideIngredients.length + index} />
                    )}
                </div>
            }
        </Fragment>
    );
}

IngredientView.propTypes = {
    recipeIngredients: PropTypes.array.isRequired
}

export default IngredientView;