import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Input, Button, Responsive, Divider } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils, faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import TopbarMenu from './topbarMenu';
import AccountInfo from './accountInfo';
import styles from './topbar.module.scss';

class Topbar extends Component {

    render() {
        const { isInfoPage, onHamburgerClick } = this.props;
        return (
            <Fragment>
                <TopbarMenu>
                    <Menu.Item className={styles.hamburger} onClick={onHamburgerClick}>
                        <FontAwesomeIcon icon={faBars} size='2x' />
                    </Menu.Item>
                    <Menu.Item as={Link} to='/' fitted className={styles.logoAndTitleItem}>
                        <Image src='/logo.png' className={styles.logo} />
                        <h2 className={styles.title}>Kitchen-Master</h2>
                    </Menu.Item>
                    {!isInfoPage &&
                        <Responsive as={Menu.Item} className={styles.searchItem}
                            minWidth={Responsive.onlyTablet.minWidth}>
                            <Input
                                action={
                                    <Button color='teal' className={styles.searchButton}>
                                        <FontAwesomeIcon icon={faSearch} size='lg'></FontAwesomeIcon>
                                    </Button>
                                } />
                        </Responsive>
                    }
                    <Responsive as={Menu.Item} position='right' className={styles.accoutInfo}
                        minWidth={Responsive.onlyTablet.minWidth}>
                        <AccountInfo />
                    </Responsive>
                    {!isInfoPage &&
                        <Menu.Item position='right'>
                            <FontAwesomeIcon icon={faUtensils} size='2x'></FontAwesomeIcon>
                        </Menu.Item>
                    }
                </TopbarMenu>
            </Fragment>
        );
    }
}

Topbar.propTypes = {
    isInfoPage: PropTypes.bool,
    onHamburgerClick: PropTypes.func.isRequired
}

export default Topbar;