import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Button } from 'semantic-ui-react';
import Step from './step';
import { fieldChangeHandler } from '_/components/common/mixins/fieldChangeHandler';
import { currentRecipeSelector } from '_/redux/selectors/recipe';
import { setCurrentRecipeFieldAction } from '_/redux/actions/recipe';
import { addRecipeDirectionAction, removeRecipeDirectionAction } from '_/redux/actions/recipe';

class DirectionsSectionEdit extends Component {
    state = {}
    render() {
        const { currentRecipe } = this.props;
        return (
            <Fragment>
                <Header size='huge'>Direction</Header>
                {
                    currentRecipe.recipeDirections.map((direction, index) =>
                        <Step key={index} index={index} direction={direction}
                            onChange={(event, data) => this.handleFieldChange(event, data)} />
                    )
                }
                <Button circular color='red' size='small'
                    icon='trash alternate' content='Remove Step'
                    disabled={currentRecipe.recipeDirections.length < 2}
                    onClick={this.handleRemoveStep} />
                <Button circular color='teal' size='small'
                    icon='add' content='Add Step'
                    onClick={this.handleAddStep} />
            </Fragment>
        );
    }

    handleAddStep = () => {
        const { addRecipeDirection } = this.props;
        addRecipeDirection();
    }

    handleRemoveStep = () => {
        const { currentRecipe, removeRecipeDirection } = this.props;
        removeRecipeDirection(currentRecipe.recipeDirections.length - 1);
    }
}

Object.assign(DirectionsSectionEdit.prototype, fieldChangeHandler);

const mapStateToProps = state => {
    return {
        currentRecipe: currentRecipeSelector(state)
    };
}

const mapDispatchToProps = {
    setField: setCurrentRecipeFieldAction,
    addRecipeDirection: addRecipeDirectionAction,
    removeRecipeDirection: removeRecipeDirectionAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectionsSectionEdit);