import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { spiciesSelector } from '../../../redux/selectors/shared';
import SpicyRadio from './spicyRadio';

class SpicyRadioGroup extends Component {
    state = {}
    render() {
        const { value, onChange, spicies } = this.props;
        return (
            <Form>
                <Header size='tiny'>Spicy</Header>
                <SpicyRadio spicy={{ value: -1 }} value={value} onChange={onChange} />
                {
                    spicies.map(spicy =>
                        <SpicyRadio key={spicy.value} spicy={spicy} value={value} onChange={onChange} />)
                }
            </Form>
        );
    }
}

SpicyRadioGroup.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        spicies: spiciesSelector(state)
    }
}

export default connect(mapStateToProps, null)(SpicyRadioGroup);