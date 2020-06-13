import React from 'react';
import { Route } from 'react-router-dom';

import Main from "./Landing/components/Main";
import Register from "./Landing/components/Register";
import Login from "./Landing/components/Login";
import Game from "./Game/Game";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Main}/>
        <Route exact path='/register' component={Register}/>

        <Route exact path='/login' component={Login}/>
        <Route exact path='/game' component={Game}/>
    </div>
);

export default BaseRouter;