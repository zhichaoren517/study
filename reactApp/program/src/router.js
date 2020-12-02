import DefaultLayout from './layouts/DefalutLayout/DefalutLayout';
import LoginUser from './layouts/LoginUser/LoginUser';

import React, { Component } from "react";
import {HashRouter,Route,Redirect,Switch} from "react-router-dom" ;

export default class RouterWrap extends Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={LoginUser} exact/>
                    <Route path="/home" component={DefaultLayout}   />
                </Switch>
            </HashRouter>
        )
    }
}
