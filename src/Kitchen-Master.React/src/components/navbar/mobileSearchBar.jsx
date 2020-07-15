import React, { Component, Fragment } from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './mobileSearchBar.module.scss';

const MobileSearchBar = () => {
    return (
        <Menu inverted borderless attached size='large' className={styles.menu}>
            <Menu.Item className={styles.searchItem}>
                <Input
                    action={
                        <Button color='teal' className={styles.searchButton}>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </Button>
                    } />
            </Menu.Item>
        </Menu>
    );
}

export default MobileSearchBar;