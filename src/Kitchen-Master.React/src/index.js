import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'semantic-ui-css/semantic.min.css';
import configStore from './redux/configStore';

const store = configStore();
ReactDOM.render(<App store={store} />, document.getElementById('root'));
