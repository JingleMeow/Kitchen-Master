import { kmApi, createShowLoaderInterceptor } from '../../../services/webapi';
import { setLoader } from '../shared';

export default function registerAction(model) {
    return dispatch => {
        const showLoaderInterceptor = createShowLoaderInterceptor(
            isLoading => dispatch(setLoader(isLoading))
        );
        return kmApi.post('account/register', model, showLoaderInterceptor);
    }
}