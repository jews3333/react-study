import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Router from './routes/Router';

import './base.scss';

const Root = () => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    );
}

ReactDOM.render(<Root/>, document.getElementById("root"));
