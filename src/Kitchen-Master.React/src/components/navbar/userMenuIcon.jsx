import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import styles from './userMenuIcon.module.scss';
import { currentUserSelector } from '_/redux/selectors/shared';
import userMenuSelector from '../../redux/selectors/userData/userMenuSelector';
import { connect } from 'react-redux';

const UserMenuIcon = ({ currentUser, userMenu }) => {
    return (
        <Fragment>
            <FontAwesomeIcon icon={faUtensils} size='2x'>
            </FontAwesomeIcon>
            {currentUser &&
                <div className={styles.menuRecipeCount}>
                    {userMenu.length}
                </div>
            }
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        currentUser: currentUserSelector(state),
        userMenu: userMenuSelector(state)
    };
}

export default connect(mapStateToProps, null)(UserMenuIcon);
