import React , { Component } from "react"
import { Menu } from 'antd';
import { AppleOutlined} from '@ant-design/icons';
import "./HeadNav.less"
import {Link} from 'react-router-dom'
export default class HeadNav extends Component{
    state = {
        current: 'home',
    }
    //react 实验中的public class field语法
    // switchMenu = e => {
    //     console.log(e,this)
    //     this.setState({
    //         current:e.key
    //     })
    // }
    switchMenu(e){
        this.setState({
            current:e.key
        })
    }
    componentWillMount(){
        console.log(this,'componentWillMount');
    }
    componentDidMount(){
        console.log(this,'componentDidMount');
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps, prevState, snapshot,this,'componentDidUpdate');
    }
    componentWillUnmount(){
        console.log(this,'componentWillUnmount')
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <AppleOutlined />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            onClick={ (e) => this.switchMenu(e) }
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                <Link to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="aboutme">
                                <Link to="/home/about">关于我</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/home/article">文章分享</Link>
                            </Menu.Item>
                            <Menu.Item key="resource">
                                <Link to="/home/resource">资源共享</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}