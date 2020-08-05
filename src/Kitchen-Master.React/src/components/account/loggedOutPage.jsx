import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MessagePage, { getPositiveType } from '../common/messagePage';
import Nlbr from '../common/nlbr';
import withNavbar from '../navbar/withNavbar';
import { removeAccessToken } from '_/utils/auth';
import { setCurrentUserAction } from '_/redux/actions/shared'

class LoggedOutPage extends Component {
    constructor(props) {
        super(props);
        this.isValidAccess = props.location.state?.doLogout;
    }

    state = {
        countDown: 5
    }
    isValidAccess = false;

    componentDidMount() {
        if (this.isValidAccess) {
            removeAccessToken();
            this.props.setCurrentUser(null);

            this.intervalId = setInterval(() => {
                let { countDown } = this.state;
                if (countDown > 0) {
                    countDown--;
                    this.setState({ countDown });
                } else {
                    clearInterval(this.intervalId);
                    window.location.href = '/';
                }
            }, 1000);
        }
    }

    render() {
        if (!this.isValidAccess)
            return <Redirect to='/pageNotFound' />;

        const { countDown } = this.state;
        return (
            <MessagePage title='Signed out' messageType={getPositiveType()}>
                <p style={{ whiteSpace: 'pre-line' }}>
                    You have securely signed out.
                    <Nlbr />
                    Redirecting to home page in <span style={{ color: 'red' }}>{countDown}</span> second{countDown > 1 && 's'}.
                </p>
            </MessagePage>
        );
    }
}

const mapDispatchToProps = {
    setCurrentUser: setCurrentUserAction
};

export default withNavbar(connect(null, mapDispatchToProps)(LoggedOutPage), true);