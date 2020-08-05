import apiCallbackAction from '../apiCallbackAction';

export default function uploadCoverImageAction(image) {
    return dispatch => {
        return dispatch(apiCallbackAction.putImage('/image/upload', image));
    }
}