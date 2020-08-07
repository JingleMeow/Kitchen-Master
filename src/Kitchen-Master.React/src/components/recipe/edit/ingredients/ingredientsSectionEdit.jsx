import React, { Component, Fragment } from 'react';
import { Header, Button, Dropdown } from 'semantic-ui-react';
import IngredientLabel from './ingredientLabel';
import IngredientModal from './ingredientModal';

class IngredientsSectionEdit extends Component {
    state = {
        ingredients: [],
        showIngredientModal: false
    }
    render() {
        const { ingredients, showIngredientModal } = this.state;
        return (
            <Fragment>
                <Header size='huge'>Ingredients</Header>
                {
                    ingredients.map((idt, index) =>
                        <IngredientLabel key={index} ingredient={idt} index={index}
                            onDelete={this.handleDelete} />
                    )
                }
                <Button circular icon='add' content='Add Ingredient' color='teal' size='small'
                    onClick={this.handleAddButtonClick} />
                <IngredientModal open={showIngredientModal}
                    onIngredientSelected={this.handleIngredientSelected}
                    onClose={this.handleModalClose} />
            </Fragment>
        );
    }

    handleAddButtonClick = () => {
        this.setState({ showIngredientModal: true });
    }

    handleDelete = index => {
        const { ingredients } = this.state;
        ingredients.splice(index, 1);
        this.setState({ ingredients });
    }

    handleIngredientSelected = selectedIngredient => {
        const { ingredients } = this.state;
        ingredients.push(selectedIngredient);
        this.setState({ ingredients });
    }

    handleModalClose = () => {
        this.setState({ showIngredientModal: false });
    }

    handleRemove = (event, data) => {
        console.log(event, data);
    }
}

export default IngredientsSectionEdit;