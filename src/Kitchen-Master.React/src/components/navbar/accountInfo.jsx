import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import styles from './accountInfo.module.scss'

class AccountInfo extends Component {

    render() {
        if (this.context)
            return this.renderSignedInAccount();
        else
            return this.renderAnonymousAccount();
    }

    renderSignedInAccount() {
        return (
            <div>
                {this.renderGreeting(`Hello, ${this.context.firstname}`)}
                <div className={styles.link} onClick={this.handleLogout}>Sign Out</div>
            </div>
        );
    }

    renderAnonymousAccount() {
        return (
            <div>
                {this.renderGreeting('Good day!')}
                <Link to='/login' className={styles.link}>Sign In</Link>
            </div>
        )
    }

    renderGreeting(text) {
        return (
            <div className={styles.greetings}>
                <span className={styles.userName}>{text}</span>
            </div>
        );
    }

    handleLogout = () => {
        this.props.history.push('/loggedOut', { doLogout: true });
    }
}

AccountInfo.contextType = UserContext;

export default withRouter(AccountInfo);