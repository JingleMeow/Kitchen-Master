import React from 'react';
import { Link } from 'react-router-dom';
import MessagePage, { getPositiveType } from '../common/messagePage';
import withNavbar from '../navbar/withNavbar';

const AccountConfirmedPage = () => {
    return (
        <MessagePage title='Email confirmed' messageType={getPositiveType()}>
            <p>
                Click <Link to='/login'>here</Link> to login.
            </p>
        </MessagePage>
    );
}

export default withNavbar(AccountConfirmedPage, true);
