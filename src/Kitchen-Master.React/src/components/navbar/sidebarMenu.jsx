import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faBook, faHeart, faHistory, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { currentUserSelector } from '_/redux/selectors/shared';
import styles from './sidebarMenu.module.scss';

class SidebarMenu extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <Menu vertical className={styles.sidebarMenu} >
                {this.renderHeader()}
                <Menu.Item as={Link} to='/' className={styles.menuItem}>
                    <span>Home</span>
                    <div>
                        <FontAwesomeIcon icon={faHome} size='2x' />
                    </div>
                </Menu.Item>
                <Menu.Item as={Link} to='/myRecipes' disabled={!currentUser} className={styles.menuItem}>
                    <span>My Recipes</span>
                    <div>
                        <FontAwesomeIcon icon={faBook} size='2x' />
                    </div>
                </Menu.Item>
                <Menu.Item as={Link} to='/myFavorite' disabled={!currentUser} className={styles.menuItem}>
                    <span>Favorite</span>
                    <div>
                        <FontAwesomeIcon icon={faHeart} size='2x' />
                    </div>
                </Menu.Item>
                <Menu.Item as='a' disabled={!currentUser} className={styles.menuItem}>
                    <span>History</span>
                    <div>
                        <FontAwesomeIcon icon={faHistory} size='2x' />
                    </div>
                </Menu.Item>
                {this.renderFooter()}
                <Menu.Item />
            </Menu>
        );
    }

    renderHeader() {
        const { currentUser } = this.props;

        var text;
        if (currentUser) {
            text = `Hello, ${currentUser.firstname}`;
        } else {
            text = 'Dood day!';
        }
        return (
            <Menu.Item className={styles.headerItem}>
                <FontAwesomeIcon icon={faUserCircle} size='2x' />
                <h3>{text}</h3>
            </Menu.Item>

        );
    }

    renderFooter() {
        var icon, text;
        if (this.props.currentUser) {
            icon = faSignOutAlt;
            text = 'Sign Out';
        } else {
            icon = faSignInAlt;
            text = 'Sign In'
        }
        return (
            <Menu.Item as='a' className={styles.footerItem}>
                <FontAwesomeIcon icon={icon} size='2x' />
                <span>{text}</span>
            </Menu.Item>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: currentUserSelector(state)
    };
};

export default connect(mapStateToProps)(SidebarMenu);