import React, { Component } from 'react';
import { Header, Label, Icon, Divider, Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDrumstickBite, faFish, faCarrot, faCheese, faBreadSlice, faDotCircle, faLemon } from '@fortawesome/free-solid-svg-icons'
import { unitsSelector } from '../../../../redux/selectors/shared'
import styles from './ingredientLabel.module.scss';
import { connect } from 'react-redux';

class IngredientLabel extends Component {
    render() {
        const { ingredient, index, onDelete } = this.props;
        return (
            <Label size='large' className={styles.label}>
                <Grid columns={3} verticalAlign='middle' stackable={false}>
                    <Grid.Column className={styles.colIcon}>
                        <FontAwesomeIcon icon={this.getIngredientIcon()} pull='left' className={styles.icon} />
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

    getIngredientIcon() {
        const { ingredient } = this.props;
        switch (ingredient.type) {
            case 0:
                return faDrumstickBite;
            case 1:
                return faFish;
            case 2:
                return faCarrot;
            case 3:
                return faCheese;
            case 4:
                return faBreadSlice;
            case 5:
                return faDotCircle;
            case 99:
                return faLemon;

        }
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