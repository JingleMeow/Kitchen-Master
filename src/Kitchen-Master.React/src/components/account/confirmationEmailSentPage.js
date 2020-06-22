import React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmationEmailSentPage = ({ location }) => {
    return (
        <Message info>
            <Message.Header>Register Succeeded</Message.Header>
            <p>A mail has been sent to {`'${location.state.email}'`}. Please click the link in the mail to activate the account.</p>
        </Message>
    );
}

export default ConfirmationEmailSentPage;