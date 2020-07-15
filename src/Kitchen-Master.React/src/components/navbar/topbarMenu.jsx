import React, { Fragment } from 'react';
import { Responsive, Menu } from 'semantic-ui-react';

const TopbarMenu = ({ children }) => {
    return (
        <Fragment>
            <Responsive as={Menu} inverted borderless attached size='huge'
                minWidth={Responsive.onlyTablet.minWidth}>
                {children}
            </Responsive>
            <Responsive as={Menu} inverted borderless attached size='small'
                maxWidth={Responsive.onlyMobile.maxWidth}>
                {children}
            </Responsive>
        </Fragment>
    );
}

export default TopbarMenu;