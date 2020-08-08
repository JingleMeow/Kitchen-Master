import React, { Component } from 'react';
import { Segment, Label, Icon, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styles from './step.module.scss';

class Step extends Component {
    state = {}
    render() {
        const { index, direction, onChange } = this.props;
        return (
            <Segment>
                <Label color='olive' ribbon size='large'>
                    <Icon name='spoon' />
                    Step {index + 1}
                </Label>
                <Form className={styles.direction}>
                    <Form.TextArea rows={5} placeholder='Enter direction here'
                        name={`recipeDirections.${index}`}
                        value={direction}
                        onChange={onChange} />
                </Form>
            </Segment>
        );
    }
}

Step.propTypes = {
    index: PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Step;