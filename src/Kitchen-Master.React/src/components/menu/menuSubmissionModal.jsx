import React from 'react';
import { Button, Dimmer, Form, Message, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';
import { BaseForm, TextFormInput } from '../common/form';
import InputValidator from '_/utils/inputValidator';
import { submitUserMenu } from '../../redux/actions/userData/userMenuActions';
import PropTypes from 'prop-types';
class MenuSubmissionModal extends BaseForm {
    state = this.getInitState();

    schema = {
        menuName: InputValidator.string().required().label('Menu Name').done(),
    };

    render() {
        const { open } = this.props;
        const { backendError } = this.state;
        return (
            <Dimmer.Dimmable>
                <Modal open={open} size='small' closeOnDimmerClick={false} onMount={() => this.setState(this.getInitState())}>
                    <Modal.Header>
                        Enter a name for this menu:
                    </Modal.Header>
                    <Modal.Content>
                        <Form>
                            <TextFormInput fluid
                                name='menuName'
                                {...this.getFormInputProps()} />
                        </Form>
                        {backendError && <Message negative>{backendError}</Message>}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='teal' onClick={this.handleCancel}>Cancel</Button>
                        <Button primary
                            disabled={!this.validate()}
                            onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Dimmer.Dimmable>
        );
    }

    getInitState() {
        return {
            data: {
                menuName: `Menu_${moment().format('MMM-DD-YYYY')}`,
            },
            errors: {},
            backendError: ''
        };
    }

    handleModalMount() {
        this.setState();
    }

    handleCancel = () => {
        this.props.onClose();
    }

    handleSubmit = () => {
        const { submitUserMenu, onClose } = this.props;
        submitUserMenu(this.state.data.menuName)
            .then(menuId => onClose(menuId))
            .catch(error => {
                this.setState({
                    backendError: error.data ? error.data : error.message
                });
            });
    }
}

MenuSubmissionModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    submitUserMenu
}

export default connect(null, mapDispatchToProps)(MenuSubmissionModal);
