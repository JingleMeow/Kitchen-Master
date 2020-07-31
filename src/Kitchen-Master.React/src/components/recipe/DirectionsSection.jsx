import React, { Component, Fragment } from 'react';
import { Header, TextArea, Button } from 'semantic-ui-react';
import Step from './step';

class DirectionsSection extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Header size='huge'>Direction</Header>
                <Step />
                <Step />
                <Button circular icon='trash alternate' content='Remove Step' color='red' size='small' />
                <Button circular icon='add' content='Add Step' color='teal' size='small' />
            </Fragment>
        );
    }
}

export default DirectionsSection;