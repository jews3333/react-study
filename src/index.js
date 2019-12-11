import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes/Routes';

import './base.scss';

const Root = () => {
    return (
        <div id="app">
            <Routes/>
        </div>
    );
}

ReactDOM.render(<Root/>, document.getElementById("root"));
