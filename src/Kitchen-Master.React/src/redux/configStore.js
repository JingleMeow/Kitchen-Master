import { configureStore } from '@reduxjs/toolkit';
//nimport { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

export default function () {
    const store = configureStore({
        reducer: rootReducer
    });

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers/rootReducer', () => {
            const nextReducer = require('./reducers/rootReducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}