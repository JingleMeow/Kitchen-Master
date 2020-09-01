import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Header, Divider, Responsive, Form, Dropdown } from 'semantic-ui-react';
import withNavbar from '../../navbar/withNavbar';
import DifficultyRadioGroup from './difficultyRadioGroup';
import DifficultyDropdown from './difficultyDropdown';
import SpicyRadioGroup from './spicyRadioGroup';
import RecipeList from '../list/recipeList';
import { recipeListSelector } from '../../../redux/selectors/recipe';
import { parseDifficulty, parseSpicy } from '../../../utils/recipeUtils';
import { searchRecipesAction } from '../../../redux/actions/recipe/list';
import styles from './recipeSearchPage.module.scss';
import SpicyDropdown from './spicyDropdown';

class RecipeSearchPage extends Component {

    componentDidMount() {
        const { searchRecipes } = this.props;
        const queryParams = this.getQueryParams();
        searchRecipes(queryParams);
    }

    componentDidUpdate(prevProps) {
        const { location, searchRecipes } = this.props
        if (location.search !== prevProps.location.search) {
            const queryParams = this.getQueryParams();
            searchRecipes(queryParams);
        }
    }

    render() {
        const queryParams = this.getQueryParams();
        const { recipeList } = this.props;
        return (
            <div className={styles.container}>
                <Responsive as='div' minWidth={Responsive.onlyTablet.minWidth} className={styles.leftRail}>
                    <div style={{ marginLeft: 'auto', marginRight: '3.5rem', width: 'fit-content' }}>
                        <DifficultyRadioGroup value={queryParams.difficulty} onChange={this.handleDifficultyChange} />
                        <Divider section hidden />
                        <SpicyRadioGroup value={queryParams.spicy} onChange={this.handleSpicyChange} />
                    </div>
                </Responsive>
                <Responsive as='div' maxWidth={Responsive.onlyMobile.maxWidth} className={styles.mobileFilter}>
                    <Form>
                        <Form.Group widths='16' className={styles.filterGroup}>
                            <Form.Field width='8'>
                                <DifficultyDropdown value={queryParams.difficulty} onChange={this.handleDifficultyChange} />
                            </Form.Field>
                            <Form.Field width='8'>
                                <SpicyDropdown value={queryParams.spicy} onChange={this.handleSpicyChange} />
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </Responsive>
                <div className={styles.list}>
                    <Header size='small'>Search Result({recipeList.length}):</Header>
                    <RecipeList recipes={recipeList} />
                </div>
            </div>
        );
    }

    handleDifficultyChange = (event, data) => {
        const queryParams = this.getQueryParams();
        queryParams.difficulty = data.value;
        this.push(queryParams);
    }

    handleSpicyChange = (event, data) => {
        const queryParams = this.getQueryParams();
        queryParams.spicy = data.value;
        this.push(queryParams);
    }

    getQueryParams = () => {
        const params = queryString.parse(this.props.location.search);
        return {
            queryText: params.k,
            difficulty: parseDifficulty(params.d),
            spicy: parseSpicy(params.s),
            authorId: Number.parseInt(params.a)
        };
    }

    push = (queryParams) => {
        const { queryText, difficulty, spicy, authorId } = queryParams;
        let path = '/searchRecipes';
        let kParam, dParam, sParam, aParam;
        if (queryText)
            kParam = `k=${queryText}`;
        if (difficulty >= 0)
            dParam = `d=${difficulty}`;
        if (spicy >= 0)
            sParam = `s=${spicy}`;
        if (authorId > 0)
            aParam = `a=${authorId}`;
        const params = [kParam, dParam, sParam, aParam].filter(Boolean).join('&');
        if (params)
            path = `${path}?${params}`;
        this.props.history.push(path);
    }
}

const mapStateToProps = state => {
    return {
        recipeList: recipeListSelector(state)
    }
}

const mapDispatchToProps = {
    searchRecipes: searchRecipesAction
}

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(RecipeSearchPage));
