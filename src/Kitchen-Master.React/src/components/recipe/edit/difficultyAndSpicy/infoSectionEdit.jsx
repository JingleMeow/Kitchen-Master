import React, { Fragment } from 'react';
import { Header, Grid, Button } from 'semantic-ui-react';
import DifficultyEdit from './difficulty/difficultyEdit';
import SpicyEdit from './spicy/spicyEdit';

const InfoSectionEdit = () => {
    return (
        <Fragment>
            <Header size='huge'>Ratings</Header>
            <Grid stackable>
                <Grid.Row columns={2} divided verticalAlign='middle'>
                    <Grid.Column>
                        <DifficultyEdit />
                    </Grid.Column>
                    <Grid.Column>
                        <SpicyEdit />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    );
}

export default InfoSectionEdit;