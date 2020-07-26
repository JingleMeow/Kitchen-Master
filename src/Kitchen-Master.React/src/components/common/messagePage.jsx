import React from 'react';
import PropTypes from 'prop-types';
import { Message, Container, Icon, Responsive, Divider } from 'semantic-ui-react';

const MessagePage = ({ title, messageType, children }) => {
    return (
        <Container>
            <br />
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Message size='massive' icon {...messageType.type}>
                    <Icon name={messageType.icon} size='huge' />
                    <Message.Content>
                        <Message.Header>{title}</Message.Header>
                        {children}
                    </Message.Content>
                </Message>
            </Responsive>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Message size='massive' {...messageType.type}>
                    <div style={{ textAlign: "center" }}>
                        <Icon name={messageType.icon} size='huge' />
                    </div>
                    <Divider section />
                    <Message.Content>
                        <Message.Header>{title}</Message.Header>
                        {children}
                    </Message.Content>
                </Message>
            </Responsive>
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
