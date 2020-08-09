import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Button } from 'semantic-ui-react';
import IngredientLabel from './ingredientLabel';
import IngredientModal from './ingredientModal';
import newRecipeSelector from '_/redux/selectors/recipe/newRecipeSelector';
import { addRecipeIngredientAction, removeRecipeIngredientAction } from '_/redux/actions/recipe/newRecipe';
import styles from './ingredientsSectionEdit.module.scss';

class IngredientsSectionEdit extends Component {
    state = {
        showIngredientModal: false
    }
    render() {
        const { newRecipe } = this.props;
        const { showIngredientModal } = this.state;
        return (
            <Fragment>
                <Header size='huge'>Ingredients</Header>
                <div>
                    {
                        newRecipe.recipeIngredients.map((idt, index) =>
                            <IngredientLabel key={index} ingredient={idt} index={index}
                                onDelete={this.handleDelete} />
                        )
                    }
                    <Button circular icon='add' color='teal' size='small'
                        content='Add Ingredient'
                        className={styles.add}
                        onClick={this.handleAddButtonClick} />
                </div>
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
        newRecipe: newRecipeSelector(state)
    }
}

const mapDispatchToProps = {
    addRecipeIngredient: addRecipeIngredientAction,
    removeRecipeIngredient: removeRecipeIngredientAction
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsSectionEdit);