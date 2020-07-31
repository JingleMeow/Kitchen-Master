import React, { Fragment } from 'react';
import { Header, Grid, Button } from 'semantic-ui-react';
import Difficulty from './difficulty';
import SpicyLevel from './spicyLevel';
import styles from './difficultyAndSpicyLevelSection.module.scss';

const DifficultyAndSpicyLevelSection = () => {
    return (
        <Fragment>
            <Header size='huge'>Ratings</Header>
            <Grid stackable>
                <Grid.Row columns={2} divided verticalAlign='middle'>
                    <Grid.Column>
                        <Difficulty />
                    </Grid.Column>
                    <Grid.Column>
                        <SpicyLevel />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    );
}

export default DifficultyAndSpicyLevelSection;