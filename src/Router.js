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
        <Route exact path='/register' component={Register}/>

        <Route exact path='/login'>
                <div className="back" style={{background: '#29436c'}}/>
            {appStore.token?<Redirect to="/" />:<Login/>}
        </Route>

        <Route exact path='/'>
                <div className="back" style={{background: '#29436c'}}/>
                {appStore.token?<Game/>:<Redirect to="/login" /> }

        </Route>
    </div>
);

export default observer(BaseRouter);