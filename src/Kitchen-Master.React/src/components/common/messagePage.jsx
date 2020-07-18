import React from 'react';
import PropTypes from 'prop-types';
import { Message, Container, Icon } from 'semantic-ui-react';

const MessagePage = ({ title, messageType, children }) => {
    return (
        <Container>
            <br />
            <Message icon {...messageType.type}>
                <Icon name={messageType.icon} />
                <Message.Content>
                    <Message.Header>{title}</Message.Header>
                    {children}
                </Message.Content>
            </Message>
        </Container>
    );
};
MessagePage.propTypes = {
    title: PropTypes.string.isRequired,
    messageType: PropTypes.object.isRequired
}

export default MessagePage;

export function getInfoType() {
    return {
        type: { info: true },
        icon: 'info circle'
    };
}

export function getPositiveType() {
    return {
        type: { positive: true },
        icon: 'check circle'
    };
}

export function getNegativeType() {
    return {
        type: { negative: true },
        icon: 'times circle'
    };
}
