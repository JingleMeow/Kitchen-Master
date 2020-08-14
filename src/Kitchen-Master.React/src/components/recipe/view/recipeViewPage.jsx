import React, { Component } from 'react';
import { Container, Grid, Divider, Header, Image, Segment, Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import withNavbar from '../../navbar/withNavbar';
import DifficultyView from './difficulty/difficultyView';
import SpicyView from './spicy/spicyView';
import IngredientView from './ingredients/ingredientView';
import { currentRecipeSelector } from '../../../redux/selectors/recipe'
import { loadCurrentRecipeAction } from '_/redux/actions/recipe/currentRecipe'
import { getImageUrl } from '_/utils/recipeUtils';
import styles from './recipeViewPage.module.scss';
import DirectionsView from './directions/directionsView';

class RecipeViewPage extends Component {
    state = {
        recipeLoaded: false
    }

    componentDidMount() {
        const { match, loadCurrentRecipe } = this.props;
        loadCurrentRecipe(match.params.id)
            .then(response => this.setState({ recipeLoaded: true }));
    }

    render() {
        if (!this.state.recipeLoaded)
            return null;

        const { currentRecipe } = this.props;
        if (!currentRecipe) {
            return <Redirect to='/pageNotFound' />;
        }

        return (
            <Container className={styles.container} >
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column className={styles.column}>
                            <Header size='huge'>Mac and Shew's</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <div className={styles.row}>
                        <div className={styles.author}>
                            by {currentRecipe.author.firstName} {currentRecipe.author.lastName}
                        </div>
                        <div className={styles.difficulty}>
                            <DifficultyView difficultyLevel={currentRecipe.difficulty} />
                        </div>
                        <div className={styles.spicy}>
                            <SpicyView spicyLevel={currentRecipe.spicy} />
                        </div>
                    </div>
                    <Grid.Row columns={1}>
                        <Grid.Column className={styles.column}>
                            <Image src={getImageUrl(currentRecipe.coverImageId)} fluid />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column className={styles.column}>
                            <Header size='large'>Ingredients</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <div className={styles.ingredientRow}>
                        <IngredientView recipeIngredients={currentRecipe.recipeIngredients} />
                    </div>
                    <Grid.Row>
                        <Grid.Column className={styles.column}>
                            <Header size='large'>Directions</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column className={styles.column}>
                            <DirectionsView directions={currentRecipe.directions} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider hidden />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentRecipe: currentRecipeSelector(state)
    }
}

const mapDispatchToProps = {
    loadCurrentRecipe: loadCurrentRecipeAction
}

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(RecipeViewPage));