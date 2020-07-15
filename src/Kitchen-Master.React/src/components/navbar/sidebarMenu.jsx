import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faHeart, faHistory, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../contexts/userContext';
import styles from './sidebarMenu.module.scss';

class SidebarMenu extends Component {
    render() {
        return (
            <Menu vertical className={styles.sidebarMenu} >
                {this.renderHeader()}
                <Menu.Item as='a' className={styles.menuItem}>
                    <span>Home</span>
                    <FontAwesomeIcon icon={faHome} size='2x' />
                </Menu.Item>
                <Menu.Item as='a' disabled={!this.context} className={styles.menuItem}>
                    <FontAwesomeIcon icon={faHeart} size='2x' />
                    <span>Favorite</span>
                </Menu.Item>
                <Menu.Item as='a' disabled={!this.context} className={styles.menuItem}>
                    <FontAwesomeIcon icon={faHistory} size='2x' />
                    <span>History</span>
                </Menu.Item>
                {this.renderFooter()}
            </Menu>
        );
    }

    renderHeader() {
        var text;
        if (this.context) {
            text = `Hello, ${this.context.firstname}`;
            //return <h3>{`Hello, ${this.context.firstname}`}</h3>
        } else {
            text = 'Dood day!';
            //return <Link to='/login'><h3>Sign In</h3></Link>
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
        if (this.context) {
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

SidebarMenu.contextType = UserContext;

export default SidebarMenu;