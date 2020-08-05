import React, { Component } from 'react';
import withNavbar from '../../navbar/withNavbar';
import { Container, Divider } from 'semantic-ui-react';
import NameSectionEdit from './name/nameSectionEdit';
import CoverImageSectionEdit from './coverImage/coverImageSectionEdit';
import DifficultyAndSpicySectionEdit from './difficultyAndSpicy/difficultyAndSpicySectionEdit';
import IngredientsSectionEdit from './ingredients/ingredientsSectionEdit';
import DirectionsSectionEdit from './directions/directionsSectionEdit';
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
            </Container>
        );
    }
}

export default withNavbar(RecipeEditPage);