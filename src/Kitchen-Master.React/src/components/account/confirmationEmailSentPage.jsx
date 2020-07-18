import React from 'react';
import MessagePage, { getPositiveType } from '../common/messagePage';
import Nlbr from '../common/nlbr';
import withNavbar from '../navbar/withNavbar';


const ConfirmationEmailSentPage = ({ location }) => {
    return (
        <MessagePage title='Register Succeeded' messageType={getPositiveType()}>
            <p style={{ whiteSpace: 'pre-line' }}>
                A mail has been sent to {`'${location.state.email}'`}.
                <Nlbr />
                Please click the link in the mail to activate the account.
            </p>
        </MessagePage>
    );
}

export default withNavbar(ConfirmationEmailSentPage, true);
