import { setViewingMenu } from "../../reducers/menuReducer"
import apiCallbackAction from "../apiCallbackAction"

export default function loadViewingMenu(menuId) {
    return dispatch => new Promise((resolve, reject) => {
        dispatch(apiCallbackAction.get(`menu/${menuId}`, true))
            .then(response => {
                dispatch(setViewingMenu(response.data));
                resolve(response.data);
            })
            .catch(error => reject(error));
    })
}