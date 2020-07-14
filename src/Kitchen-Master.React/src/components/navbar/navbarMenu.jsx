import React, { Fragment } from 'react';
import { Responsive, Menu } from 'semantic-ui-react';
import styles from './navbarMenu.module.scss';

const NavbarMenu = ({ children }) => {
    return (
        <Fragment>
            <Responsive as={Menu} inverted borderless size='huge' className={styles.topMenu}
                minWidth={Responsive.onlyTablet.minWidth}>
                {children}
            </Responsive>
            <Responsive as={Menu} inverted borderless size='large' className={styles.topMenu}
                maxWidth={Responsive.onlyMobile.maxWidth}>
                {children}
            </Responsive>
        </Fragment>
    );
}

export default NavbarMenu;