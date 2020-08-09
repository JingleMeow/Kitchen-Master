import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SpicyButton from './spicyButton';
import { spiciesSelector } from '_/redux/selectors/shared';
import { newRecipeSelector } from '_/redux/selectors/recipe';
import { setRecipeFieldAction } from '_/redux/actions/recipe/newRecipe';
import { fieldChangeHandler } from '_/components/common/mixins/fieldChangeHandler';

const defaultHoverLevel = -1;

class SpicyEdit extends Component {
    state = {
        hoverLevel: defaultHoverLevel
    }

    render() {
        const { spicies, recipe } = this.props;
        const { hoverLevel } = this.state;
        return (
            <Fragment>
                <span>Spicy Level:</span>
                <span style={{ paddingLeft: '2em', verticalAlign: 'middle' }}>
                    {
                        spicies.map(spicy =>
                            <SpicyButton key={spicy.value} spicy={spicy}
                                spicyLevel={hoverLevel >= 0 ? hoverLevel : recipe.spicy}
                                onClick={(event, data) => this.handleFieldChange(event, data)}
                                onMouseEnter={this.handleButtonMouseEnter}
                                onMouseLeave={this.handleButtonMouseLeave} />
                        )
                    }
                </span>
            </Fragment>
        );
    }

    handleButtonMouseEnter = targetLevel => {
        this.setState({ hoverLevel: targetLevel });
    }

    handleButtonMouseLeave = () => {
        this.setState({ hoverLevel: defaultHoverLevel });
    }
}

Object.assign(SpicyEdit.prototype, fieldChangeHandler);

const mapStateToProps = state => {
    return {
        spicies: spiciesSelector(state),
        recipe: newRecipeSelector(state)
    }
}

const mapDispatchToProps = {
    setField: setRecipeFieldAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SpicyEdit);