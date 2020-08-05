import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import DifficultyButton from './difficultyButton';
import { difficultiesSelector } from '../../../../redux/selectors/shared';
import { currentRecipeSelector } from '../../../../redux/selectors/recipe';
import { setCurrentRecipeFieldAction } from '../../../../redux/actions/recipe';
import { fieldChangeHandler } from '../../../common/mixins/fieldChangeHandler';

class Difficulty extends Component {
    state = {}
    render() {
        const { difficulties, recipe } = this.props;
        return (
            <Fragment>
                <span>Difficulty:</span>
                <span style={{ paddingLeft: '2em', verticalAlign: 'middle' }}>
                    {
                        difficulties.map(difficulty =>
                            <DifficultyButton key={difficulty.value}
                                difficulty={difficulty}
                                selected={difficulty.value === recipe.difficulty}
                                onClick={(event, data) => this.handleFieldChange(event, data)} />
                        )
                    }
                </span>
            </Fragment>
        );
    }
}

Object.assign(Difficulty.prototype, fieldChangeHandler);

const mapStateToProps = state => {
    return {
        difficulties: difficultiesSelector(state),
        recipe: currentRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    setField: setCurrentRecipeFieldAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Difficulty);