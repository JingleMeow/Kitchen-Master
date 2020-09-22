import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { currentUserSelector } from '../../redux/selectors/shared'

class AuthenticatedRoute extends Component {
    render() {
        const { path, exact } = this.props;
        return <Route path={path} exact={exact}
            render={this.routeRender} />
    }

    routeRender = routeProps => {
        const { currentUser, component: Component } = this.props;
        if (currentUser) {
            return <Component {...routeProps} />;
        } else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = state => ({
    currentUser: currentUserSelector(state)
});

export default connect(mapStateToProps, null)(AuthenticatedRoute);