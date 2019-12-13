import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
 import Person from '../Contents/Person'
 import FamilyIfo from '../Contents/FamilyIfo'
 import Changepass from '../Contents/Changepass'
 import Employment from '../Contents/Employment'
 import BasicInfo from '../Contents/BasicInfo'


import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link
    // Redirect
} from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class Mangen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            showdata: false,
            news: []
        };
        
    }
    componentDidMount() {
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
            news: news[0]
        })
    }
    onshow() {
        this.setState({
            showdata:!this.state.showdata,
        })
    };
    gotologin(){
        window.location.href = '/login'
    }
    render() {
        return (
            <Router>
                <>
                     <Layout>
                        <div className="headers">
                        <div className="bgImg"></div>
                        <div className="loginOut" style={{ position: 'relative' }}>
                            <span className="userName">{this.state.news.username}</span>
                            &nbsp;
    
                      <Icon onClick={this.onshow.bind(this)} type="caret-down" />
                            &nbsp; &nbsp;
    
                        <ul onClick={this.gotologin.bind(this)} style={{
                                display: this.state.showdata ? this.state.showdata : 'none', position: 'absolute', left: '-100px', textAlign: 'center', top: '100px', background: '#fff',
                                border: '1px solid rgb(153, 153, 153)', color: 'rgb(0, 0, 0)', padding: ' 0px -4px', width: '200px', listStyle: 'none'
                            }}>
                                <li><Icon type="poweroff" />
                                    退出</li>
                            </ul>

                        </div>
                    </div>
                         <Layout>
                        <Sider width={350} style={{ background: '#fff' }}>
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            >
                            <SubMenu
                                key="sub1"
                                title={
                                <Link to='/mamgen/person'>
                                <span>
                                    <Icon type="user" />
                                   个人信息
                                </span></Link>
                                }
                            >
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                <span>
                                    <Icon type="laptop" />
                                   学生信息
                                </span>
                                }
                            >
                                <Menu.Item key="8"><Link to='/mamgen/BasicInfo'> 学生基本信息</Link> </Menu.Item>
                                <Menu.Item key="5"><Link to='/mamgen/FamilyIfo'>考研学生信息</Link> </Menu.Item>
                                <Menu.Item key="7"><Link to='/mamgen/Employment'>就业信息调查</Link> </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                <span>
                                    <Icon type="notification" />
                                    教师信息
                                </span>
                                }
                            >
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <Link to='/mamgen/Changepass'>
                                    <span>
                                    <Icon type="notification" />
                                    修改密码
                                </span>
                                </Link>
                                
                                }
                            >
                            </SubMenu>
                            </Menu>
                        </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Route path="/mamgen/person">
                                <Content style={{ margin: '0 30px' }}>
                                    <Breadcrumb style={{ margin: '26px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">管理员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>个人信息</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Person />
                                </Content>
                        </Route>
                        <Route path="/mamgen/FamilyIfo">
                                <Content style={{ margin: '0 30px' }}>
                                    <Breadcrumb style={{ margin: '26px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">管理员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>学生基本信息</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <FamilyIfo />
                                </Content>
                        </Route>
                        <Route path="/mamgen/Changepass">
                                <Content style={{ margin: '0 30px' }}>
                                    <Breadcrumb style={{ margin: '26px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">管理员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>修改密码</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Changepass />
                                </Content>
                        </Route>
                        <Route path="/mamgen/Employment">
                                <Content style={{ margin: '0 30px' }}>
                                    <Breadcrumb style={{ margin: '26px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">管理员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>修改密码</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Employment />
                                </Content>
                        </Route>
                        <Route path="/mamgen/BasicInfo">
                                <Content style={{ margin: '0 30px' }}>
                                    <Breadcrumb style={{ margin: '26px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">管理员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>修改密码</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <BasicInfo />
                                </Content>
                        </Route>
                    </Layout>
                    </Layout>
                </Layout>,

            );
             </>
            </Router>
        )
    }
}