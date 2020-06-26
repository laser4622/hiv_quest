import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import Main from "./Landing/components/Main";
import Register from "./Landing/components/Register";
import Login from "./Landing/components/Login";
import Game from "./Game/containers/Game";
import appStore from "./store";
import {observer} from "mobx-react";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Main}/>

        <Route exact path='/register' component={Register}/>

        <Route exact path='/login'>
            {appStore.token?<Redirect to="/game" />:<Login/>}
        </Route>

        <Route exact path='/game'>
            {appStore.token?<Game/>:<Redirect to="/login" /> }
        </Route>
    </div>
);

export default observer(BaseRouter);