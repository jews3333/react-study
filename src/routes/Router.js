import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Sub1, Sub2 } from './index';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/sub1" component={Sub1}></Route>
            <Route path="/sub2" component={Sub2}></Route>
        </Switch>
    );
}

export default Router;