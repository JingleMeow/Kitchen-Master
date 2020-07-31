import React, { Component, Fragment } from 'react';
import { Header, Segment, Icon, Button } from 'semantic-ui-react';

class CoverImageSection extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Header size='huge'>Cover Image</Header>
                <Segment placeholder>
                    <Header icon>
                        <Icon name='file image outline' style={{ height: 'auto' }}></Icon>
                        No cover image for this recipe
                    </Header>
                    <Button primary>Add Image...</Button>
                </Segment>
            </Fragment>
        );
    }
}

export default CoverImageSection;