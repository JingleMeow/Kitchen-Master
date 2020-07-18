import React from 'react';
import MessagePage, { getInfoType } from './common/messagePage';
import Nlbr from './common/nlbr';
import withNavbar from './navbar/withNavbar';

const FofPage = () => {
    const messageType = getInfoType();
    messageType.icon = 'exclamation circle';
    return (
        <MessagePage title='Oops! Page Not Found' messageType={messageType}>
            <p style={{ whiteSpace: 'pre-line' }}>
                Sorry, but the page you are looking for is not found.
                <Nlbr />
                Go back, or head over to the home page.
            </p>
        </MessagePage>
    );
}

export default withNavbar(FofPage, true);