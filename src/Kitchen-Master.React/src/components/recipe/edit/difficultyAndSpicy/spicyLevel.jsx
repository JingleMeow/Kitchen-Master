import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SpicyButton from './spicyButton';
import { spiciesSelector } from '../../../../redux/selectors/shared';
import { currentRecipeSelector } from '../../../../redux/selectors/recipe';
import { setCurrentRecipeFieldAction } from '../../../../redux/actions/recipe';
import { fieldChangeHandler } from '../../../common/mixins/fieldChangeHandler';

const defaultHoverLevel = -1;

class SpicyLevel extends Component {
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

Object.assign(SpicyLevel.prototype, fieldChangeHandler);

const mapStateToProps = state => {
    return {
        spicies: spiciesSelector(state),
        recipe: currentRecipeSelector(state)
    }
}

const mapDispatchToProps = {
    setField: setCurrentRecipeFieldAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SpicyLevel);