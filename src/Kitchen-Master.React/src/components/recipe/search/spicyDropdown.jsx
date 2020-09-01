import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { spiciesSelector } from '../../../redux/selectors/shared';

class SpicyDropdown extends Component {
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
        const { spicies } = this.props;
        const options = spicies.map(spicy => {
            return {
                key: spicy.value,
                value: spicy.value,
                text: spicy.label
            }
        });
        return [{
            key: -1,
            value: -1,
            text: 'All'
        }, ...options];
    }
}

SpicyDropdown.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        spicies: spiciesSelector(state)
    }
}

export default connect(mapStateToProps, null)(SpicyDropdown);
