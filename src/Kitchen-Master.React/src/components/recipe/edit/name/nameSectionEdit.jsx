import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Icon, Input, } from 'semantic-ui-react';
import { currentRecipeSelector } from '_/redux/selectors/recipe';
import { setCurrentRecipeFieldAction } from '_/redux/actions/recipe';
import { fieldChangeHandler } from '_/components/common/mixins/fieldChangeHandler';

class NameSectionEdit extends Component {
    constructor(props) {
        super(props);
    }

    state = {}
    render() {
        const { currentRecipe: recipe } = this.props;
        return (
            <Fragment>
                <Header size='huge'>Recipe</Header>
                <Input name='name' fluid iconPosition='left' placeholder='Enter a name here...'
                    onChange={(event, data) => this.handleFieldChange(event, data)}>
                    <Icon name='keyboard outline' />
                    <input value={recipe.name} />
                </Input>
            </Fragment>
        );
    }
}

Object.assign(NameSectionEdit.prototype, fieldChangeHandler);

const mapStateToProps = state => {
    return {
        currentRecipe: currentRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    setField: setCurrentRecipeFieldAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NameSectionEdit);