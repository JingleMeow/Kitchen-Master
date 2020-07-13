import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'semantic-ui-react';
import UserContext from '../../contexts/userContext';
import styles from './accountInfo.module.css'

class AccountInfo extends Component {

    render() {
        var greetingText, link, linkText;
        if (this.context) {
            greetingText = `Hello, ${this.context.firstname}`;
            link = '/logout';
            linkText = 'Sign Out';
        } else {
            greetingText = 'Good day!';
            link = '/login';
            linkText = 'Sign-In/Up';
        }
        return (
            <div>
                {this.renderGreeting(greetingText)}
                {this.renderLink(link, linkText)}
            </div>
        );
    }
    renderGreeting(text) {
        return (
            <div className={styles.greetings}>
                <span className={styles.userName}>{text}</span>
            </div>
        );
    }

    renderLink(link, text) {
        return <Link to={link} className={styles.link}>{text}</Link>
    }
}

AccountInfo.contextType = UserContext;

export default AccountInfo;