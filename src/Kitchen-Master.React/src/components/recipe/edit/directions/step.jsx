import React, { Component, Fragment } from 'react';
import { Segment, Label, Icon, Form, Button } from 'semantic-ui-react';
import styles from './step.module.scss';

class Step extends Component {
    state = {}
    render() {
        return (
            <Segment>
                <Label color='olive' ribbon size='large'>
                    <Icon name='spoon' />
                    Step 1
                </Label>
                <Form className={styles.direction}>
                    <Form.TextArea rows={5} placeholder='Enter direction here' />
                </Form>
            </Segment>
        );
    }
}

export default Step;