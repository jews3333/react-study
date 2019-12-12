import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes/Routes';

import './App.scss';

const Root = () => {
    return (
        <div id="app">
            <Routes/>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
        </div>
    );
}

ReactDOM.render(<Root/>, document.getElementById("root"));
