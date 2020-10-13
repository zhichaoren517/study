import {
    Article,
    Dashboard,
    Login,
    Notfound,
    Settings,
} from "../views"

import React, { Component } from "react";
import {HashRouter,Route,Redirect,Switch} from "react-router-dom" ;

export default class RouterWrap extends  Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Article} exact>
                    </Route>
                    <Route path="/Dashboard" component={Dashboard}></Route>
                    <Route path="/Login" component={Login}></Route>
                    <Route path="/Notfound" component={Notfound}></Route>
                    <Route path="/Settings" component={Settings}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
