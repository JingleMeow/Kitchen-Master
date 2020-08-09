import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, Button } from 'semantic-ui-react';
import withNavbar from '../../navbar/withNavbar';
import NameSectionEdit from './name/nameSectionEdit';
import CoverImageSectionEdit from './coverImage/coverImageSectionEdit';
import DifficultyAndSpicySectionEdit from './difficultyAndSpicy/difficultyAndSpicySectionEdit';
import IngredientsSectionEdit from './ingredients/ingredientsSectionEdit';
import DirectionsSectionEdit from './directions/directionsSectionEdit';
import { currentRecipeSelector } from '_/redux/selectors/recipe';
import { saveRecipeAction } from '_/redux/actions/recipe'
import styles from './recipeEditPage.module.scss';

class RecipeEditPage extends Component {
    state = {}
    render() {
        return (
            <Container className={styles.container} >
                <NameSectionEdit />
                <CoverImageSectionEdit />
                <DifficultyAndSpicySectionEdit />
                <Divider hidden></Divider>
                <IngredientsSectionEdit />
                <Divider section></Divider>
                <DirectionsSectionEdit />
                <Divider section></Divider>
                <Button primary size='big' floated='right' onClick={this.handleSave}>Save</Button>
                <Divider section hidden></Divider>
            </Container>
        );
    }

    handleSave = () => {
        const { currentRecipe, saveRecipe } = this.props;
        const directions = currentRecipe.directions.map(
            (direction, index) => {
                return {
                    order: index + 1,
                    text: direction
                };
            });
        const recipeIngredients = currentRecipe.recipeIngredients.map(
            (ingredient, index) => {
                return {
                    ingredientId: ingredient.id,
                    amount: parseFloat(ingredient.amount),
                    unitId: ingredient.unitId
                }
            }
        );
        const recipe = Object.assign({}, currentRecipe, { directions, recipeIngredients });
        saveRecipe(recipe);
    }
}

const mapStateToProps = state => {
    return {
        currentRecipe: currentRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    saveRecipe: saveRecipeAction
}

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(RecipeEditPage));
