import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Header, Table } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import ReactToPrint from 'react-to-print';
import withNavbar from '../../navbar/withNavbar';
import viewingMenuSelector from '_/redux/selectors/menu/viewingMenuSelector';
import standardUnitsSelector from '_/redux/selectors/shared/standardUnitsSelector';
import loadViewingMenu from '_/redux/actions/menu/loadViewingMenuAction';
import { getIngredientIcon } from '_/utils/recipeUtils';
import styles from './historyMenuViewPage.module.scss';

class HistoryMenuViewPage extends Component {
    state = {
        menuLoaded: false
    }

    componentDidMount() {
        const { match, loadViewingMenu } = this.props;
        loadViewingMenu(match.params.id)
            .then(() => {
                this.setState({ menuLoaded: true });
            });
    }

    render() {
        if (!this.state.menuLoaded)
            return null;

        const { viewingMenu, standardUnits } = this.props;
        const ingredients = _.sortBy(viewingMenu.ingredients, i => i.type);
        return (
            <Container className={styles.container}>
                <div ref={el => (this.printableRef = el)}>
                    <Header size='large'>{viewingMenu.menuName}</Header>
                    <Divider />
                    <Table celled striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='2'>
                                    Recipes
                            </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {viewingMenu.recipes.map((recipe, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign='center' collapsing>{index + 1}</Table.Cell>
                                    <Table.Cell>
                                        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                    <Table celled striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3'>
                                    Ingredients
                            </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {ingredients.map((ingredient, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign='center' collapsing>
                                        <FontAwesomeIcon color='grey' icon={getIngredientIcon(ingredient.type)} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {ingredient.name}
                                    </Table.Cell>
                                    <Table.Cell textAlign='right' collapsing>
                                        {`${ingredient.amount.toFixed(1)} ${standardUnits[ingredient.unitCategory].label}`}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
                <Divider />
                <ReactToPrint
                    trigger={() => <Button primary floated='right'>Print</Button>}
                    content={() => this.printableRef}
                />
                <Divider hidden />
            </Container >
        );
    }
}

const mapStateToProps = state => {
    return {
        viewingMenu: viewingMenuSelector(state),
        standardUnits: standardUnitsSelector(state)
    };
}

const mapDispatchToProps = {
    loadViewingMenu
}

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(HistoryMenuViewPage));