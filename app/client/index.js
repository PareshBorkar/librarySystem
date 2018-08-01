import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/public';

window.onload = function () {
    ReactDOM.hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};