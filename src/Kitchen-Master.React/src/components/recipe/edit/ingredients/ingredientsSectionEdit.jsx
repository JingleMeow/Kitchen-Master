import React, { Component, Fragment } from 'react';
import { Header, Button } from 'semantic-ui-react';
import IngredientLabel from './ingredientLabel';

class IngredientsSectionEdit extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Header size='huge'>Ingredients</Header>
                <IngredientLabel />
                <IngredientLabel />
                <IngredientLabel />
                <IngredientLabel />
                <Button circular icon='add' content='Add Ingredient' color='teal' size='small' />
            </Fragment>
        );
    }

    handleRemove = (event, data) => {
        console.log(event, data);
    }
}

export default IngredientsSectionEdit;