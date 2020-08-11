import React from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';
import styles from './stepView.module.scss';

const stepView = ({ direction }) => {
    return (
        <Segment>
            <Label color='olive' ribbon size='large'>
                <Icon name='spoon' />
                Step {direction.order}
            </Label>
            <span className={styles.text}>
                {direction.text}
            </span>
        </Segment>);
}

export default stepView;