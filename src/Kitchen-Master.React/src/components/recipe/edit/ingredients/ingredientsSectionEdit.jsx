import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Button } from 'semantic-ui-react';
import IngredientLabel from './ingredientLabel';
import IngredientModal from './ingredientModal';
import currentRecipeSelector from '_/redux/selectors/recipe/currentRecipeSelector';
import { addRecipeIngredientAction, removeRecipeIngredientAction } from '_/redux/actions/recipe/';

class IngredientsSectionEdit extends Component {
    state = {
        showIngredientModal: false
    }
    render() {
        const { currentRecipe } = this.props;
        const { showIngredientModal } = this.state;
        return (
            <Fragment>
                <Header size='huge'>Ingredients</Header>
                {
                    currentRecipe.recipeIngredients.map((idt, index) =>
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
        const { removeRecipeIngredient } = this.props;
        removeRecipeIngredient(index);
    }

    handleIngredientSelected = selectedIngredient => {
        const { addRecipeIngredient } = this.props;
        addRecipeIngredient(selectedIngredient);
    }

    handleModalClose = () => {
        this.setState({ showIngredientModal: false });
    }

    handleRemove = (event, data) => {
        console.log(event, data);
    }
}

const mapStateToProps = state => {
    return {
        currentRecipe: currentRecipeSelector(state)
    }
}

const mapDispatchToProps = {
    addRecipeIngredient: addRecipeIngredientAction,
    removeRecipeIngredient: removeRecipeIngredientAction
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsSectionEdit);