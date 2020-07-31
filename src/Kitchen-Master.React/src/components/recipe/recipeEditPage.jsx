import React, { Component, Fragment } from 'react';
import withNavbar from '../navbar/withNavbar';
import { Container, Header, Segment, Icon, Button, Divider } from 'semantic-ui-react';
import NameSection from './nameSection';
import CoverImageSection from './coverImageSection';
import DifficultyAndSpicyLevelSection from './difficultyAndSpicyLevel/difficultyAndSpicyLevelSection';
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
                <DifficultyAndSpicyLevelSection />
                <Divider hidden></Divider>
                <IngredientsSection />
                <Divider section></Divider>
                <DirectionsSection />
            </Container>
        );
    }
}

export default withNavbar(RecipeEditPage);