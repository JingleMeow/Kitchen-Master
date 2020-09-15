import { setHistoryMenus } from "../../reducers/menuReducer"
import apiCallbackAction from "../apiCallbackAction"

export default function loadHistoryMenus() {
    return dispatch => new Promise((resolve, reject) => {
        dispatch(apiCallbackAction.get('menu/history', true))
            .then(response => {
                dispatch(setHistoryMenus(response.data));
                resolve(response.data);
            })
            .catch(error => reject(error));
    })

}
