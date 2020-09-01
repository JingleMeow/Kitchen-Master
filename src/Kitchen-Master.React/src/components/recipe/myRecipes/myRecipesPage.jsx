import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Header, Button, Divider } from 'semantic-ui-react';
import withNavbar from '../../navbar/withNavbar';
import RecipeList from '../list/recipeList'
import { currentUserSelector } from '_/redux/selectors/shared';
import { recipeListSelector } from '_/redux/selectors/recipe';
import { searchRecipesAction } from '_/redux/actions/recipe/list';
import styles from './myRecipesPage.module.scss';

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
                <div className={styles.topAction}>
                    <Header size='small'>My recipes ({recipeList.length}):</Header>
                    <Button as={Link} to='/recipe/new'
                        icon='add' color='teal' size='medium'
                        content='New Recipe' />
                </div>
                <Divider />
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