import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { searchIngredients } from '_/services/webapi/recipe/ingredientsService';
import { toPascalCase } from '_/utils/stringUtils'
import styles from './ingredientDropDown.module.scss';

class IngredientDropDown extends Component {
    state = {
        newIngredient: null,
        ingredients: [],
        isLoading: false,
        value: null
    }
    render() {
        const { value, isLoading } = this.state;
        return (
            <Dropdown placeholder='Enter ingredient name' fluid search selection
                className={styles.dropDown}
                loading={isLoading}
                selectOnNavigation={false}
                options={this.getOptions()}
                allowAdditions
                searchInput={{ onChange: (e, data) => data.value = data.value.toLowerCase() }}
                minCharacters={2}
                onSearchChange={this.handleSearchChange}
                onAddItem={this.handleAddItem}
                value={value}
                onChange={this.handleValueChange} />
        );
    }

    handleValueChange = (event, data) => {
        const { onChange } = this.props;
        const { ingredients } = this.state;
        if (typeof data.value === 'number') {
            this.setState({
                value: data.value,
                newIngredient: null
            });
            onChange(ingredients.find(x => x.id === data.value));
        }
    }

    handleAddItem = (event, data) => {
        const { onChange } = this.props;
        const newIngredient = {
            id: 0,
            name: toPascalCase(data.value),
            type: null,
            unitCategory: null
        };
        this.setState({
            newIngredient,
            value: 0
        });
        onChange(newIngredient);
    }

    handleSearchChange = (event, data) => {
        if (data.searchQuery?.length === 2) {
            this.setState({ isLoading: true });
            searchIngredients(data.searchQuery)
                .then(response => {
                    this.setState({
                        ingredients: response.data,
                        isLoading: false
                    });
                })
                .catch(error => {
                    this.setState({ isLoading: false });
                })
        }
    }

    getOptions() {
        const { newIngredient, ingredients } = this.state;
        const allIngredients = newIngredient ? [newIngredient, ...ingredients] : ingredients;
        const options = allIngredients.map(ingredient => {
            return {
                key: ingredient.id,
                value: ingredient.id,
                text: ingredient.name.toLowerCase(),
            };
        });
        return options;
    }
}

IngredientDropDown.propTypes = {
    onChange: PropTypes.func
}

export default IngredientDropDown;