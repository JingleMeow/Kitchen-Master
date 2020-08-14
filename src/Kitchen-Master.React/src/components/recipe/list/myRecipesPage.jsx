import React, { Component } from 'react';
import { connect } from 'react-redux';
import withNavbar from '../../navbar/withNavbar';
import RecipeList from './recipeList'
import { currentUserSelector } from '_/redux/selectors/shared';
import { recipeListSelector } from '_/redux/selectors/recipe';
import { searchRecipesAction } from '_/redux/actions/recipe/list';
import styles from './myRecipesPage.module.scss';
import { Container } from 'semantic-ui-react';

class MyRecipesPage extends Component {
    state = {}

    componentDidMount() {
        const { currentUser, searchRecipes } = this.props;
        searchRecipes({ authorId: currentUser.nameid });
    }
    render() {
        const { recipeList } = this.props;
        return (
            <Container className={styles.container}>
                <RecipeList recipes={recipeList} />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipeList: recipeListSelector(state),
        currentUser: currentUserSelector(state)
    }
};

const mapDispatchToProps = {
    searchRecipes: searchRecipesAction
};

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(MyRecipesPage));