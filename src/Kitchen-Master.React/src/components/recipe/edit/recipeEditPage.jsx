import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, Button } from 'semantic-ui-react';
import withNavbar from '../../navbar/withNavbar';
import NameSectionEdit from './name/nameSectionEdit';
import CoverImageSectionEdit from './coverImage/coverImageSectionEdit';
import InfoSectionEdit from './difficultyAndSpicy/infoSectionEdit';
import IngredientsSectionEdit from './ingredients/ingredientsSectionEdit';
import DirectionsSectionEdit from './directions/directionsSectionEdit';
import { newRecipeSelector } from '_/redux/selectors/recipe';
import { saveRecipeAction } from '_/redux/actions/recipe/newRecipe'
import styles from './recipeEditPage.module.scss';

class RecipeEditPage extends Component {
    state = {}
    render() {
        return (
            <Container className={styles.container} >
                <NameSectionEdit />
                <CoverImageSectionEdit />
                <InfoSectionEdit />
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
        const { newRecipe, saveRecipe, history } = this.props;
        const directions = newRecipe.directions.map(
            (direction, index) => {
                return {
                    order: index + 1,
                    text: direction
                };
            });
        const recipeIngredients = newRecipe.recipeIngredients.map(
            (ingredient, index) => {
                return {
                    ingredientId: ingredient.id,
                    amount: parseFloat(ingredient.amount),
                    unitId: ingredient.unitId
                }
            }
        );
        const recipe = Object.assign({}, newRecipe, { directions, recipeIngredients });
        saveRecipe(recipe)
            .then(() =>
                history.replace('/myRecipes'));
    }
}

const mapStateToProps = state => {
    return {
        newRecipe: newRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    saveRecipe: saveRecipeAction
}

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(RecipeEditPage));
