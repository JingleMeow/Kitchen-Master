import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Container } from 'semantic-ui-react';
import withNavbar from '../navbar/withNavbar';

const AccountConfirmedPage = () => {
    return (
        <Container as={Message} info>
            <Message.Header>Email confirmed</Message.Header>
            <p>Click <Link to='/login'>here</Link> to login</p>
        </Container>
    );
}

export default withNavbar(AccountConfirmedPage, true);
