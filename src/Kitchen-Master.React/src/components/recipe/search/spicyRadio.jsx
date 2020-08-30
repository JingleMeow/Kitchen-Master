import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SpicyIcon from '../common/spicyIcon/spicyIcon';
import { firstLetterToUpper } from '../../../utils/stringUtils';
import styles from './spicyRadio.module.scss';


const SpicyRadio = ({ spicy, value, onChange }) => {
    if (spicy.value < 0)
        return (
            <Form.Field className={styles.field} >
                <Radio
                    label='All'
                    value={spicy.value}
                    checked={value === spicy.value}
                    onChange={onChange} />
            </Form.Field >
        );
    else
        return (
            <Form.Field key={spicy.value} className={styles.field}>
                <Radio className={styles.radioButton}
                    value={spicy.value}
                    checked={value === spicy.value}
                    onChange={onChange}>
                </Radio>
                <SpicyIcon spicyLevel={spicy.value} />
            </Form.Field>
        );
}

SpicyRadio.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SpicyRadio;