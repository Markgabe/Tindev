import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login/';
import Feed from './pages/Feed/';
import Match from './pages/Match/';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Feed} />
            <Route path="/match/:id" component={Match} />
        </BrowserRouter>
    );
}