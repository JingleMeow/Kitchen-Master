import React, { Component, Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import styles from './difficulty.module.scss';

class Difficulty extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <span>Difficulty:</span>
                <span style={{ paddingLeft: '2em', verticalAlign: 'middle' }}>
                    <Button compact size='small' className={styles.easyUnselected}>Easy</Button>
                    <Button compact size='small' className={styles.medium}>Medium</Button>
                    <Button compact size='small' className={styles.hard} disabled>Hard</Button>
                </span>
            </Fragment>
        );
    }
}

export default Difficulty;