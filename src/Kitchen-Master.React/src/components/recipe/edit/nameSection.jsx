import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Icon, Input, } from 'semantic-ui-react';
import { currentRecipeSelector } from '../../../redux/selectors/recipe';
import { setCurrentRecipeFieldAction } from '../../../redux/actions/recipe';
import { fieldChangeHandler } from '../../common/mixins/fieldChangeHandler';

class NameSection extends Component {
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

Object.assign(NameSection.prototype, fieldChangeHandler);

const mapStateToProps = state => {
    return {
        currentRecipe: currentRecipeSelector(state)
    }
};

const mapDispatchToProps = {
    setField: setCurrentRecipeFieldAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NameSection);