import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import ThreeD from './threeD';
import Flat from './flat';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/flat' component={Flat} />
            <Route exact path='/3d' component={ThreeD} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    </main>
)

export default Main;
