import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label, Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { unitsSelector } from '_/redux/selectors/shared';
import { getIngredientIcon } from '_/utils/recipeUtils';
import styles from './ingredientLabel.module.scss';

class IngredientLabel extends Component {
    render() {
        const { ingredient, index, onDelete } = this.props;
        return (
            <Label size='large' className={styles.label}>
                <Grid columns={3} verticalAlign='middle' stackable={false}>
                    <Grid.Column className={styles.colIcon}>
                        <FontAwesomeIcon icon={getIngredientIcon(ingredient.type)} pull='left' className={styles.icon} />
                    </Grid.Column>
                    <Grid.Column className={styles.colText}>
                        <Grid.Row>
                            {ingredient.name}
                        </Grid.Row>
                        <Grid.Row>
                            {ingredient.amount} {this.getUnitLabel()}
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column className={styles.colButton}>
                        <FontAwesomeIcon icon={faTimes} pull='left' className={styles.delete}
                            onClick={() => onDelete(index)} />
                    </Grid.Column>
                </Grid>
            </Label>
        );
    }

    getUnitLabel() {
        const { ingredient, units } = this.props;
        return units.find(u => u.id === ingredient.unitId).label;
    }
}

const mapStateToProps = state => {
    return {
        units: unitsSelector(state)
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientLabel);