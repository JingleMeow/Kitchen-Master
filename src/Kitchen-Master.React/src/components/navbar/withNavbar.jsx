import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sidebar, Responsive } from 'semantic-ui-react';
import SidebarMenu from './sidebarMenu';
import Topbar from './topBar';
import MobileSearchBar from './mobileSearchBar';
import { loadDefinitionsAction } from '../../redux/actions/shared';
import styles from './withNavbar.module.scss';

function withNavbar(PageComponent, isInfoPage) {
    class WithNavbar extends Component {
        state = {
            isSidebarVisible: false
        }

        componentDidMount() {
            this.props.loadDefinitions();
        }

        render() {
            const { isSidebarVisible } = this.state;
            return (
                <Sidebar.Pushable>
                    <Responsive minWidth={Responsive.onlyTablet.minWidth}
                        as={Sidebar} animation='overlay' width='wide'
                        visible={isSidebarVisible}
                        onHide={() => this.setSidebarVisible(false)}>
                        <SidebarMenu />
                    </Responsive>
                    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}
                        as={Sidebar} animation='push'
                        visible={isSidebarVisible}
                        onHide={() => this.setSidebarVisible(false)}>
                        <SidebarMenu />
                    </Responsive>
                    <Sidebar.Pusher dimmed={isSidebarVisible} className={styles.navbarPage}>
                        <Topbar isInfoPage={isInfoPage} onHamburgerClick={this.handleHamburgerClick} />
                        {!isInfoPage && <Responsive as={MobileSearchBar} maxWidth={Responsive.onlyMobile.maxWidth} />}
                        <div className={isInfoPage ? styles.infoPageContainer : styles.normalPageContainer}>
                            <PageComponent {...this.props} />
                        </div>
                        <div className={styles.footer}></div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable >
            );
        }

        renderSidebar() {
            const { isSidebarVisible } = this.state;

            return (
                <Sidebar animation='push'
                    visible={isSidebarVisible}
                    width='wide'
                    onHide={() => this.setSidebarVisible(false)}>
                    <SidebarMenu />
                </Sidebar>
            );
        }

        handleHamburgerClick = () => {
            this.setSidebarVisible(true);
        }

        setSidebarVisible = isSidebarVisible => {
            this.setState({ isSidebarVisible });
        }
    };

    const mapDispatchToProps = {
        loadDefinitions: loadDefinitionsAction
    }
    return connect(null, mapDispatchToProps)(WithNavbar);
}

export default withNavbar;