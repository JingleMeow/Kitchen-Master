import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Button } from 'semantic-ui-react';
import Step from './step';
import { fieldChangeHandler } from '_/components/common/mixins/fieldChangeHandler';
import { newRecipeSelector } from '_/redux/selectors/recipe';
import { setRecipeFieldAction, addRecipeDirectionAction, removeRecipeDirectionAction } from '_/redux/actions/recipe/newRecipe';

class DirectionsSectionEdit extends Component {
    state = {}
    render() {
        const { newRecipe } = this.props;
        return (
            <Fragment>
                <Header size='huge'>Direction</Header>
                {
                    newRecipe.directions.map((direction, index) =>
                        <Step key={index} index={index} direction={direction}
                            onChange={(event, data) => this.handleFieldChange(event, data)} />
                    )
                }
                <Button circular color='red' size='small'
                    icon='trash alternate' content='Remove Step'
                    disabled={newRecipe.directions.length < 2}
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
        const { newRecipe, removeRecipeDirection } = this.props;
        removeRecipeDirection(newRecipe.directions.length - 1);
    }
}

Object.assign(DirectionsSectionEdit.prototype, fieldChangeHandler);

const mapStateToProps = state => {
    return {
        newRecipe: newRecipeSelector(state)
    };
}

const mapDispatchToProps = {
    setField: setRecipeFieldAction,
    addRecipeDirection: addRecipeDirectionAction,
    removeRecipeDirection: removeRecipeDirectionAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectionsSectionEdit);