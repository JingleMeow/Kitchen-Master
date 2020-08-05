import React, { Component } from 'react';
import withNavbar from '../../navbar/withNavbar';
import { Container, Divider } from 'semantic-ui-react';
import NameSection from './nameSection';
import CoverImageSection from './coverImageSection';
import DifficultyAndSpicySection from './difficultyAndSpicy/difficultyAndSpicySection';
import IngredientsSection from './ingredientsSection';
import DirectionsSection from './directionsSection';
import styles from './recipeEditPage.module.scss';

class RecipeEditPage extends Component {
    state = {}
    render() {
        return (
            <Container className={styles.container} >
                <NameSection />
                <CoverImageSection />
                <DifficultyAndSpicySection />
                <Divider hidden></Divider>
                <IngredientsSection />
                <Divider section></Divider>
                <DirectionsSection />
            </Container>
        );
    }
}

export default withNavbar(RecipeEditPage);