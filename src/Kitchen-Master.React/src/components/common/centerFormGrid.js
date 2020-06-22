import React, { Component, Children } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import styles from './centerFormGrid.module.css';

const CenterFromGrid = ({ children }) => {
    return (
        <Grid textAlign='center' verticalAlign='middle' className={styles.formGrid}>
            <Grid.Column className={styles.gridColumn}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' className={styles.logo} />
                    <span className={styles.headerText}>Kitchen Master</span>
                </Header>
                {children}
            </Grid.Column>
        </Grid>
    );
}

export default CenterFromGrid;
