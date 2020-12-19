import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';

const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage} />
        </Switch>
    </BrowserRouter>
)

export default Main;
