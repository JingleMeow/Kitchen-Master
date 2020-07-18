import React, { Fragment } from 'react';
import { Responsive, Menu } from 'semantic-ui-react';
import styles from './topbarMenu.module.scss';

const TopbarMenu = ({ children }) => {
    return (
        <Fragment>
            <Responsive as={Menu} inverted borderless attached size='huge'
                className={styles.topbarMenu}
                minWidth={Responsive.onlyTablet.minWidth}>
                {children}
            </Responsive>
            <Responsive as={Menu} inverted borderless attached size='small'
                className={styles.topbarMenu}
                maxWidth={Responsive.onlyMobile.maxWidth}>
                {children}
            </Responsive>
        </Fragment>
    );
}

export default TopbarMenu;