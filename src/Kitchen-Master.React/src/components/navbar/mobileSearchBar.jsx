import React from 'react';
import { Menu } from 'semantic-ui-react';
import styles from './mobileSearchBar.module.scss';
import SearchInput from './searchInput';

const MobileSearchBar = () => {
    return (
        <Menu inverted borderless attached size='large' className={styles.searchBarMenu}>
            <Menu.Item className={styles.searchItem}>
                <SearchInput iconSize='1x' />
            </Menu.Item>
        </Menu>
    );
}

export default MobileSearchBar;