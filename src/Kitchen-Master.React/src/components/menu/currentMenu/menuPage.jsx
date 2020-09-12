import React, { Component } from 'react';
import { Container, Header, Image, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import withNavbar from '../../navbar/withNavbar'
import UserMenuItem from './userMenuItem';
import MenuSubmissionModal from './menuSubmissionModal';
import userMenuSelector from '../../../redux/selectors/userData/userMenuSelector';
import { removeRecipeFromMenu } from '../../../redux/actions/userData/userMenuActions';
import styles from './menuPage.module.scss';

class MenuPage extends Component {
    state = {
        showModal: false
    }

    render() {
        const { userMenu, removeRecipeFromMenu } = this.props;
        const { showModal } = this.state;
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
                    <Button size='huge' color='orange' onClick={this.handleSave}>Save</Button>
                </div>
                <MenuSubmissionModal open={showModal} onClose={this.handleModalClose} />
            </Container>
        );
    }

    handleSave = () => {
        this.setState({ showModal: true });
    }

    handleModalClose = menuId => {
        if (menuId) {
            this.props.history.push(`menu/${menuId}`);
        }
        this.setState({ showModal: false });
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
