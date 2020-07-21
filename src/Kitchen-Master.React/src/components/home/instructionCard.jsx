import React from 'react';
import { Icon, Grid, Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './instructionCard.module.scss';

const InstractionCard = ({ instruction }) => {
    const { icon, title, description } = instruction;
    return (
        <Grid.Column textAlign='center' width='4' className={styles.card}>
            <div>
                <Icon.Group size='massive' className={styles.iconGroup} >
                    <FontAwesomeIcon icon={icon} inverse />
                </Icon.Group>
                <Header as='h1'>
                    {title}
                    <Header.Subheader className={styles.description}>
                        {description}
                    </Header.Subheader>
                </Header>
            </div>
        </Grid.Column>
    );
}

export default InstractionCard;