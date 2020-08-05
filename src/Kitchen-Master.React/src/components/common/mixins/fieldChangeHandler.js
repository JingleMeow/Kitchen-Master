export const fieldChangeHandler = {
    handleFieldChange(event, data) {
        const { componentPath, setField } = this.props;
        const path = componentPath ? componentPath + '.' + data.name : data.name;
        setField(path, data.value);
    }
};
