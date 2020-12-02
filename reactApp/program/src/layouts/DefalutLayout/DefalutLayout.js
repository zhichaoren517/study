
import React , { Component } from "react" ;
import HeadNav from '../../components/HeadNav/HeadNav.js'
import Footernav from "../../components/Footernav/FooterNav"
import { Route } from "react-router-dom"
import About from "../../routes/About/About"
import Article from "../../routes/Article/Article"
import Home from "../../routes/Home/Home"
import Resource from "../../routes/Resource/Resource"
export default class DefalutLayout extends Component{
    constructor(){
        super()
        console.log(this,"this");
    }
    render(){
        return (
            <div id="DefalutLayout"> 
                <HeadNav></HeadNav>
                <div>
                    <Route path={ this.props.match.url+"/" } component={Home} exact></Route>
                    <Route path={ this.props.match.url+"/about" } component={About}></Route>
                    <Route path={ this.props.match.url+"/article" } component={Article}></Route>
                    <Route path={ this.props.match.url+"/resource" } component={Resource}></Route>
                </div>
                <Footernav></Footernav>
            </div>
        )
    }
}