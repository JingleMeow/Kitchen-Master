import React, { Component, Fragment } from 'react';
import { Menu, Image, Container, Input, Button, Responsive } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils, faSearch } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from './navbarMenu';
import AccountInfo from './accountInfo';
import styles from './withNavbar.module.scss';

function withNavbar(PageComponent, isInfoPage) {
    return class WithNavbar extends Component {
        render() {
            return (
                <Fragment>
                    <NavbarMenu>
                        <Menu.Item>
                            <FontAwesomeIcon icon={faBars} size='2x' />
                        </Menu.Item>
                        <Menu.Item fitted>
                            <Image src='/logo.png' className={styles.logo} />
                        </Menu.Item>
                        <Menu.Item className={styles.title}>
                            <h2>Kitchen-Master</h2>
                        </Menu.Item>
                        {!isInfoPage &&
                            <Responsive as={Menu.Item} fitted='horizontally' className={styles.searchItem}
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
                    </NavbarMenu>
                    <Container>
                        <PageComponent />
                    </Container>
                </Fragment>
            );
        }
    };
}

export default withNavbar;