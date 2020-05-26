import React from 'react';
import { Route } from 'react-router-dom';

import Main from "./components/Main";
import Register from "./components/Register";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Main}/>
        <Route exact path='/register' component={Register}/>
    </div>
);

export default BaseRouter;