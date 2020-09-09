import React, { Component } from 'react';
import withNavbar from '../navbar/withNavbar'
import { Container, Header, Image, Divider, Button } from 'semantic-ui-react';
import styles from './menuPage.module.scss';
import userMenuSelector from '../../redux/selectors/userData/userMenuSelector';
import { removeRecipeFromMenu } from '../../redux/actions/userData/userMenuActions';
import { connect } from 'react-redux';
import UserMenuItem from './userMenuItem';

class MenuPage extends Component {
    state = {}
    render() {
        const { userMenu, removeRecipeFromMenu } = this.props;
        return (
            <Container className={styles.container}>
                <Header size='huge'>Menu</Header>
                <Divider />
                {
                    userMenu.length === 0 &&
                    <div className={styles.emptyMenu}>
                        <Image src='/empty-menu.svg' fluid />
                        <Header color='grey'>Your menu is empty.</Header>
                    </div>
                }
                {userMenu.map(recipe =>
                    <UserMenuItem key={recipe.id} recipe={recipe} onRemove={removeRecipeFromMenu} />
                )}
                <Divider section hidden />
                <div className={styles.checkout} hidden={userMenu.length === 0}>
                    <Button size='huge' color='orange'>Save</Button>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        userMenu: userMenuSelector(state)
    }
}

const mapDispatchToProps = {
    removeRecipeFromMenu
}

export default withNavbar(connect(mapStateToProps, mapDispatchToProps)(MenuPage));
