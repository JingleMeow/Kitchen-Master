import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Responsive } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import PropTypes from 'prop-types';
import SearchInput from './searchInput';
import TopbarMenu from './topbarMenu';
import AccountInfo from './accountInfo';
import UserMenuIcon from './userMenuIcon';
import { currentUserSelector } from '_/redux/selectors/shared';
import styles from './topbar.module.scss';
import { connect } from 'react-redux';

class Topbar extends Component {

    render() {
        const { isInfoPage, onHamburgerClick, currentUser } = this.props;
        return (
            <TopbarMenu>
                <Menu.Item className={styles.hamburger} onClick={onHamburgerClick}>
                    <FontAwesomeIcon icon={faBars} size='2x' />
                </Menu.Item>
                <Menu.Item as={Link} to='/' fitted className={styles.logoAndTitleItem}>
                    <Image src='/public/logo.png' className={styles.logo} />
                    <h2 className={styles.title}>Kitchen-Master</h2>
                </Menu.Item>
                {!isInfoPage &&
                    <Responsive as={Menu.Item} className={styles.searchItem}
                        minWidth={Responsive.onlyTablet.minWidth}>
                        <SearchInput iconSize='lg' />
                    </Responsive>
                }
                <Responsive as={Menu.Item} position='right' className={styles.accoutInfo}
                    minWidth={Responsive.onlyTablet.minWidth}>
                    <AccountInfo />
                </Responsive>
                {!isInfoPage &&
                    <Menu.Item as={Link} position='right'
                        to='/menu'
                        className={cn({ [styles.menuLinkDisabled]: !currentUser })}>
                        <UserMenuIcon />
                    </Menu.Item>
                }
            </TopbarMenu>
        );
    }
}

Topbar.propTypes = {
    isInfoPage: PropTypes.bool,
    onHamburgerClick: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        currentUser: currentUserSelector(state)
    };
}

export default connect(mapStateToProps, null)(Topbar);