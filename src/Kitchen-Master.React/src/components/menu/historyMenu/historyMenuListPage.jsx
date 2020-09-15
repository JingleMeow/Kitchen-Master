import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Responsive, Table } from 'semantic-ui-react';
import moment from 'moment';
import withNavbar from '../../navbar/withNavbar';
import historyMenusSelector from '_/redux/selectors/menu/historyMenusSelector';
import loadHistoryMenus from '../../../redux/actions/menu/loadHistoryMenusAction';
import styles from './historyMenuListPage.module.scss';
import { Link } from 'react-router-dom';

class HistoryMenuListPage extends Component {
    state = {}

    componentDidMount() {
        this.props.loadHistoryMenus();
    }

    render() {
        const { historyMenus } = this.props;
        return (
            <Container className={styles.container}>
                <Header size='large'>History Menus</Header>
                {historyMenus.length > 0 &&
                    <Table celled striped unstackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Recipes</Table.HeaderCell>
                                <Responsive as={Table.HeaderCell} minWidth={Responsive.onlyTablet.minWidth} singleLine>
                                    Created Date
                                </Responsive>
                            </Table.Row>
                            {
                                historyMenus.map(menu =>
                                    <Table.Row key={menu.id}>
                                        <Table.Cell>
                                            <Link to={`/menu/${menu.id}`}>{menu.menuName}</Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center' collapsing>{menu.recipeCount}</Table.Cell>
                                        <Responsive as={Table.Cell} minWidth={Responsive.onlyTablet.minWidth} collapsing>
                                            {moment(menu.createdTime).format('MMM-DD-YYYY')}
                                        </Responsive>
                                    </Table.Row>
                                )
                            }

                        </Table.Header>
                        <Table.Body></Table.Body>
                    </Table>}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        historyMenus: historyMenusSelector(state)
    }
}

const mapDispatchToProps = {
    loadHistoryMenus
}

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(HistoryMenuListPage));
