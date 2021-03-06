export function updateStateField(state, path, value) {
    path.split('.').reduce((prev, curr, index, array) => {
        if (index == array.length - 1) {
            prev[curr] = value;
        }
        return prev[curr];
    }, state);
}
