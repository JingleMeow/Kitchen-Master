import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { currentUserSelector } from '../../redux/selectors/shared';
import { setCurrentUserAction } from '../../redux/actions/shared';
import styles from './accountInfo.module.scss'

class AccountInfo extends Component {

    render() {
        if (this.props.currentUser)
            return this.renderSignedInAccount();
        else
            return this.renderAnonymousAccount();
    }

    renderSignedInAccount() {
        return (
            <div>
                {this.renderGreeting(`Hello, ${this.props.currentUser.firstname}`)}
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

const mapStateToProps = state => {
    return {
        currentUser: currentUserSelector(state)
    };
};

const mapDispatchToProps = {
    setCurrentUser: setCurrentUserAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountInfo));