import apiCallbackAction from '../apiCallbackAction';

export default function saveRecpipeAction(recipe) {
    return apiCallbackAction.post('/recipe', recipe, true);
}