import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Divider } from 'semantic-ui-react';
import RecipeList from '../list/recipeList'
import { currentUserSelector } from '_/redux/selectors/shared';
import { recipeListSelector } from '_/redux/selectors/recipe';
import { likedRecipeIdsSelector } from '_/redux/selectors/userData';
import { searchRecipesAction } from '_/redux/actions/recipe/list';
import withNavbar from '../../navbar/withNavbar';
import styles from './myFavoritePage.module.scss';

class MyFavoritePage extends Component {
    state = {}

    componentDidMount() {
        const { currentUser, searchRecipes } = this.props;
        searchRecipes({ likeByUserId: currentUser.nameid });
    }

    render() {
        const { recipeList, likedRecipeIds } = this.props;
        const filteredRecipes = recipeList.filter(x => likedRecipeIds?.includes(x.id));
        return (
            <Container className={styles.container}>
                <Header size='small'>My favorite ({filteredRecipes.length}):</Header>
                <Divider />
                <RecipeList recipes={filteredRecipes} />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipeList: recipeListSelector(state),
        currentUser: currentUserSelector(state),
        likedRecipeIds: likedRecipeIdsSelector(state)
    }
};

const mapDispatchToProps = {
    searchRecipes: searchRecipesAction
};

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(MyFavoritePage));
