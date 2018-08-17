import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';   // React-Redux
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { store } from './store';

// Framework Antd.Design
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.min.js';

ReactDOM.render(

    // Provider provee el store en toda la aplicacion, pertenece a React-Redux
    <Provider store={store}>    
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
