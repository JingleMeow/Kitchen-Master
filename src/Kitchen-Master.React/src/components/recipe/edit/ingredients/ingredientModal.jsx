import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Dimmer, Loader, Menu, Segment, Input, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { BaseForm, TextFormInput, DropDownFormInput } from '../../../common/form';
import InputValidator from '_/utils/inputValidator';
import IngredientDropDown from './ingredientDropDown';
import { ingredientTypesSelector, unitCategoriesSelector, unitsSelector } from '_/redux/selectors/shared';
import { addIngredient } from '../../../../services/webapi/recipe/ingredientsService'
import styles from './ingredientModal.module.scss';

const initialState = {
    data: {
        id: '',
        name: '',
        type: '',
        unitCategory: '',
        amount: '',
        coefficient: 1
    },
    errors: {},
    backendError: '',
    dimmed: false
};

class IngredientModal extends BaseForm {
    state = initialState;
    schema = {
        id: InputValidator.number().required().label('Ingredient').done(),
        type: InputValidator.number().required().label('Type').done(),
        unitCategory: InputValidator.number().required().label('Measure').done(),
        amount: InputValidator.number().min(0.1).required().label('Amount').done(),
        coefficient: InputValidator.number().required().label('Unit').done()
    }

    render() {
        const { open } = this.props;
        const { data, backendError, dimmed } = this.state;
        return (
            <Dimmer.Dimmable>
                <Modal open={open} size='small' closeOnDimmerClick={false} onMount={this.handleModalMount}>
                    <Dimmer active={dimmed} inverted>
                        <Loader size="huge">Saving...</Loader>
                    </Dimmer>
                    <Modal.Header>
                        Select an ingredient:
                    </Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Segment>
                                {this.renderField('Ingredient', this.renderIngredientDropDown())}
                                {data.id === 0 &&
                                    <Form.Group widths='equal' className={styles.group}>
                                        {this.renderField('Type', this.renderTypeDropDown())}
                                        {this.renderField('Measure', this.renderMeasureDropDown())}
                                    </Form.Group>}
                            </Segment>
                            <Segment>
                                <Form.Group widths='16' className={styles.group}>
                                    {this.renderField('Amount', this.renderAmountInput(), '11')}
                                    {this.renderField('Unit', this.renderUnitDropdown(), '5')}
                                </Form.Group>
                            </Segment>
                        </Form>
                        {backendError && <Message negative>{backendError}</Message>}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='teal' onClick={this.handleCancel}>Cancel</Button>
                        <Button primary
                            disabled={!this.validate()}
                            onClick={this.handleOk}>
                            OK
                    </Button>
                    </Modal.Actions>
                </Modal>
            </Dimmer.Dimmable>
        );
    }

    renderField(label, input, width) {
        return (
            <Form.Field width={width}>
                <label>{label}</label>
                {input}
            </Form.Field>
        );
    }

    renderIngredientDropDown() {
        return (<IngredientDropDown onChange={this.handleIngredientChange} />);
    }

    renderTypeDropDown() {
        const { ingredientTypes } = this.props;
        return (
            <DropDownFormInput fluid selection
                name='type'
                options={this.getDropDownOptions(ingredientTypes)}
                {...this.getFormInputProps()} />
        );
    }

    renderMeasureDropDown() {
        const { unitCategories } = this.props;
        return (
            <DropDownFormInput fluid selection
                name='unitCategory'
                options={this.getDropDownOptions(unitCategories)}
                {...this.getFormInputProps()} />
        );
    }

    renderAmountInput() {
        return (
            <TextFormInput fluid
                name='amount'
                {...this.getFormInputProps()} />
        );
    }

    renderUnitDropdown() {
        const { coefficient } = this.state;
        return (
            <DropDownFormInput fluid selection
                name='coefficient'
                options={this.getUnitOptions()}
                {...this.getFormInputProps()} />
        );
    }

    handleIngredientChange = ingredient => {
        const { data } = this.state;
        Object.assign(data, ingredient);
        this.setState({ data });
    }

    handleModalMount = () => {
        this.setState(initialState);
    }

    handleCancel = () => {
        this.props.onClose();
    }

    handleOk = () => {
        const { onIngredientSelected, onClose } = this.props;
        const { data: ingredient } = this.state;
        if (ingredient.id == 0) {
            this.setState({ dimmed: true });
            addIngredient(ingredient)
                .then(response => {
                    onIngredientSelected({ ...ingredient, id: response.data.id });
                    this.setState({ dimmed: false });
                    onClose();
                })
                .catch(error => {
                    this.setState({
                        dimmed: false,
                        backendError: error.data ? error.data : error.message
                    });
                });
        } else {
            onIngredientSelected(ingredient);
            onClose();
        }
    }

    getDropDownOptions(dropDownData) {
        return dropDownData.map(i => {
            return {
                key: i.value,
                value: i.value,
                text: i.label
            }
        });
    }

    getUnitOptions = () => {
        const { data: ingredient } = this.state;
        const { units } = this.props;
        return units.filter(x => x.unitCategory === ingredient.unitCategory)
            .map(unit => {
                return {
                    key: unit.id,
                    value: unit.coefficient,
                    text: unit.label
                };
            });
    }
}

IngredientModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onIngredientSelected: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        ingredientTypes: ingredientTypesSelector(state),
        unitCategories: unitCategoriesSelector(state),
        units: unitsSelector(state)
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientModal);