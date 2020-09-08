import React, { Component } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import userMenuSelector from '_/redux/selectors/userData/userMenuSelector';
import { addRecipeToMenu } from '_/redux/actions/userData/userMenuActions';

class AddToMenuButton extends Component {
    state = {}
    render() {
        const { recipeId, userMenu } = this.props;
        const addedToMenu = userMenu.some(x => x.id === recipeId);
        return (
            <Button as='div' fluid labelPosition='right' disabled={addedToMenu} onClick={this.handleAddRecipe} >
                <Button fluid color='teal'>
                    Add{addedToMenu && 'ed'} to Menu
                </Button>
                <Label as='a' basic color='teal' pointing='left'>
                    <Icon name={addedToMenu ? 'check' : 'numbered list'} fitted />
                </Label>
            </Button>
        );
    }

    handleAddRecipe = () => {
        const { recipeId, addRecipeToMenu } = this.props;
        addRecipeToMenu(recipeId);
    }
}

const mapStateToProps = state => {
    return {
        userMenu: userMenuSelector(state)
    };
}

const mapDispatchToProps = {
    addRecipeToMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToMenuButton);