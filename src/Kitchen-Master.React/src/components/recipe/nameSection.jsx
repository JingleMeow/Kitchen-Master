import React, { Component, Fragment } from 'react';
import { Header, Icon, Input, } from 'semantic-ui-react';

class NameSection extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Header size='huge'>Recipe</Header>
                <Input fluid iconPosition='left' placeholder='Enter a name here...'>
                    <Icon name='keyboard outline' />
                    <input />
                </Input>

            </Fragment>
        );
    }
}

export default NameSection;