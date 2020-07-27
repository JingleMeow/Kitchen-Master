import { kmApi, createShowLoaderInterceptor } from '../../../services/webapi';
import { setLoader } from '../shared';
import { setAccessToken } from '../../../utils/auth';

export default function loginAction(model) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const showLoaderInterceptor = createShowLoaderInterceptor(
                isLoading => dispatch(setLoader(isLoading))
            );
            kmApi.post('account/login', model, showLoaderInterceptor)
                .then(
                    response => {
                        setAccessToken(response.data);
                        resolve(response);
                    }
                )
                .catch(
                    error => {
                        reject(error);
                    }
                )
        })
    }
}
