import React from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import withNavbar from '../navbar/withNavbar';

const AccountConfirmedPage = () => {
    return (
        <Message info>
            <Message.Header>Email confirmed</Message.Header>
            <p>Click <Link to='/login'>here</Link> to login</p>
        </Message>
    );
}

export default withNavbar(AccountConfirmedPage, false);
