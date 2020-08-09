import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import DifficultyButton from './difficultyButton';
import { difficultiesSelector } from '_/redux/selectors/shared';
import { newRecipeSelector } from '_/redux/selectors/recipe';
import { setRecipeFieldAction } from '_/redux/actions/recipe/newRecipe';
import { fieldChangeHandler } from '_/components/common/mixins/fieldChangeHandler';

class DifficultyEdit extends Component {
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

Object.assign(DifficultyEdit.prototype, fieldChangeHandler);

const mapStateToProps = state => {
    return {
        difficulties: difficultiesSelector(state),
        recipe: newRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    setField: setRecipeFieldAction
};

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyEdit);