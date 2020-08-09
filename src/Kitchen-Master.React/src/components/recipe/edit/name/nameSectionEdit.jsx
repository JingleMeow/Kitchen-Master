import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Icon, Input, } from 'semantic-ui-react';
import { newRecipeSelector } from '_/redux/selectors/recipe';
import { setRecipeFieldAction } from '_/redux/actions/recipe/newRecipe';
import { fieldChangeHandler } from '_/components/common/mixins/fieldChangeHandler';

class NameSectionEdit extends Component {
    constructor(props) {
        super(props);
    }

    state = {}
    render() {
        const { newRecipe: recipe } = this.props;
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
        newRecipe: newRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    setField: setRecipeFieldAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NameSectionEdit);