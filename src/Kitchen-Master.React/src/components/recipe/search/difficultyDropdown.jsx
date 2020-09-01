import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { difficultiesSelector } from '../../../redux/selectors/shared';

class DifficultyDropdown extends Component {
    state = {}
    render() {
        const { value, onChange } = this.props;
        return (
            <Form.Dropdown fluid selection
                style={{ zIndex: 101 }}
                options={this.getDropdownOptions()}
                value={value}
                onChange={onChange}
            />
        );
    }

    getDropdownOptions = () => {
        const { difficulties } = this.props;
        const options = difficulties.map(difficulty => {
            return {
                key: difficulty.value,
                value: difficulty.value,
                text: difficulty.label
            }
        });
        return [{
            key: -1,
            value: -1,
            text: 'All'
        }, ...options];
    }
}

DifficultyDropdown.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        difficulties: difficultiesSelector(state)
    }
}

export default connect(mapStateToProps, null)(DifficultyDropdown);
