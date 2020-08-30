import React, { Component, Fragment } from 'react';
import { Header, Radio, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { difficultiesSelector } from '../../../redux/selectors/shared';
import { firstLetterToUpper } from '../../../utils/stringUtils';
import styles from './difficultyRadioGroup.module.scss';

class DifficultyRadioGroup extends Component {
    state = {}
    render() {
        const { value, onChange, difficulties } = this.props;
        return (
            <Form>
                <Header size='tiny'>Difficulty</Header>
                <Form.Field className={styles.field}>
                    <Radio
                        label='All'
                        value={-1}
                        checked={value === -1}
                        onChange={onChange} />
                </Form.Field>
                {difficulties.map(difficulty =>
                    <Form.Field key={difficulty.value} className={styles.field}>
                        <Radio
                            label={firstLetterToUpper(difficulty.label)}
                            value={difficulty.value}
                            checked={value === difficulty.value}
                            onChange={onChange} />
                    </Form.Field>
                )}

            </Form>
        );
    }
}

DifficultyRadioGroup.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        difficulties: difficultiesSelector(state)
    }
}

export default connect(mapStateToProps, null)(DifficultyRadioGroup);