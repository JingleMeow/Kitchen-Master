import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, Header } from 'semantic-ui-react';
import RecipeList from '../list/recipeList';
import { recipeListSelector } from '_/redux/selectors/recipe';
import { getHotRecipesAction } from '_/redux/actions/recipe/list'
import styles from './hotRecipesPage.module.scss';
import withNavbar from '../../navbar/withNavbar';

class HotRecipesPage extends Component {

    componentDidMount() {
        const { getHotRecipes } = this.props;
        getHotRecipes();
    }

    render() {
        const { recipeList } = this.props;
        return (
            <Container className={styles.container}>
                <Header size='small'>Hot Recipes:</Header>
                <Divider />
                <RecipeList recipes={recipeList} />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    recipeList: recipeListSelector(state)
})

const mapDispatchToProps = {
    getHotRecipes: getHotRecipesAction
}

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(HotRecipesPage));
