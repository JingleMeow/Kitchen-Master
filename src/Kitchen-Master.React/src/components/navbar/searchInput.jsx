import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Input, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import styles from './searchInput.module.scss';

class SearchInput extends Component {
    state = {
        queryText: ''
    }

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);
        if (params.k)
            this.setState({ queryText: params.k });
    }

    render() {
        const { iconSize } = this.props;
        return (
            <Input
                value={this.state.queryText}
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
                action={
                    <Button color='teal' className={styles.searchButton} onClick={() => this.doSearch()}>
                        {<FontAwesomeIcon icon={faSearch} size={iconSize}></FontAwesomeIcon>}
                    </Button>
                } />
        );
    }

    handleKeyPress = event => {
        if (event.key === 'Enter')
            this.doSearch();
    }

    handleChange = (event, data) => {
        this.setState({ queryText: data.value });
    }

    doSearch = () => {
        const { queryText } = this.state;
        let path = '/searchRecipes';
        if (queryText)
            path += `?k=${queryText}`;
        this.props.history.push(path);
    }
}

SearchInput.propTypes = {
    iconSize: PropTypes.string.isRequired
}

export default withRouter(SearchInput);