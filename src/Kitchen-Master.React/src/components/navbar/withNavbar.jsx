import React, { Component, Fragment } from 'react';
import { Menu, Image, Container, Input, Icon, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils, faSearch } from '@fortawesome/free-solid-svg-icons';
import AccountInfo from './accountInfo';
import styles from './withNavbar.module.css';

function withNavbar(PageComponent, isInfoPage) {
    return class WithNavbar extends Component {
        render() {
            return (
                <Fragment>
                    <Menu inverted borderless size='huge' className={styles.topMenu}>
                        <Menu.Item>
                            <FontAwesomeIcon icon={faBars} size='2x'></FontAwesomeIcon>
                        </Menu.Item>
                        <Menu.Item fitted>
                            <Image src='/logo.png' className={styles.logo} />
                        </Menu.Item>
                        <Menu.Item className={styles.title}>
                            <h2>Kitchen-Master</h2>
                        </Menu.Item>
                        {!isInfoPage &&
                            <Menu.Item fitted='horizontally' className={styles.searchItem}>
                                <Input
                                    action={
                                        <Button color='teal' className={styles.searchButton}>
                                            <FontAwesomeIcon icon={faSearch} size='lg'></FontAwesomeIcon>
                                        </Button>
                                    } />
                            </Menu.Item>}
                        <Menu.Item fitted className={styles.accoutInfo}>
                            <AccountInfo />
                        </Menu.Item>
                        {!isInfoPage &&
                            <Menu.Item position='right'>
                                <FontAwesomeIcon icon={faUtensils} size='2x'></FontAwesomeIcon>
                            </Menu.Item>
                        }
                    </Menu>
                    <Container>
                        <PageComponent />
                    </Container>
                </Fragment>
            );
        }
    };
}

export default withNavbar;