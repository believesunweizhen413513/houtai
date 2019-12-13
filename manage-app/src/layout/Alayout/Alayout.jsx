// import { createBrowserHistory } from 'history'; // 如果是history路由
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    // Redirect
} from 'react-router-dom'
// 匿名投诉组件


import Niming from '../../components/Complaint/Niming'
import Jixu from '../../components/Complaint/Jixu'
import Xiangmu from '../../components/Complaint/Xiangmu'
import Houtai from '../../components/Complaint/VIP'
import Zhoubao from '../../components/Complaint/Zhoubao'
import Glxt from '../../components/Complaint/Glxt';
import Jiaofei from '../../components/Complaint/Jiaofei';
import Kaoshi from '../../components/Complaint/Kaoshi';
import Pingjia from '../../components/Complaint/Pingjia';
import Jxpj from '../../components/Complaint/Jxpj';
import Qingjia from '../../components/Complaint/Qingjia';
import Weiji from '../../components/Complaint/Weiji';
import Xiugai from '../../components/Complaint/Xiugai'

// const history = createBrowserHistory();
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Alayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            showdata: false,
            news: []
        }
    }
    componentDidMount() {
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
            news: news[0]
        })
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    onshow() {
        this.setState({
            showdata:!this.state.showdata,
        })
    };
    gotologin(){
        window.location.href = '/login'
        // history.push('/login')
    }


    render() {
        return (
            <Router>
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
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={400}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>学员后台</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3"><Link to="/alayout/option1">匿名投诉</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/alayout/problem">技术问题</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/alayout/itemupload">项目上传</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/alayout/stuvip">VIP</Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/alayout/weekly">学院周报</Link></Menu.Item>
                                <Menu.Item key="8"><Link to="/alayout/profile">我的资料</Link></Menu.Item>
                                <Menu.Item key="9"><Link to="/alayout/moneyDetail">交费明细</Link></Menu.Item>
                                <Menu.Item key="10"><Link to="/alayout/exams">参加考试</Link></Menu.Item>
                                <Menu.Item key="11"><Link to="/alayout/evaluate">学员评价</Link></Menu.Item>
                                <Menu.Item key="12"><Link to="/alayout/Inquiry">教学测评</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="team" />
                                        <span>学员考勤</span>
                                    </span>
                                } >
                                <Menu.Item key="13"><Link to="/alayout/leave">学员考勤</Link></Menu.Item>
                                <Menu.Item key="14"><Link to="/alayout/option12">学员违纪</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Switch>
                            <Route path="/alayout/option1">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>匿名投诉</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Niming />
                                </Content>
                            </Route>
                            <Route path="/alayout/problem">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>技术问题</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Jixu />
                                </Content>
                            </Route>
                            <Route path="/alayout/itemupload">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>项目上传</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Xiangmu />
                                </Content>
                            </Route>
                            <Route path="/alayout/stuvip">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>VIP</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Houtai />
                                </Content>
                            </Route>
                            <Route path="/alayout/weekly">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>学员周报</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Zhoubao />
                                </Content>
                            </Route>
                            <Route path="/alayout/profile">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">系统管理</Breadcrumb.Item>
                                        <Breadcrumb.Item>后台首页</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Glxt />
                                </Content>
                            </Route>
                            <Route path="/alayout/moneyDetail">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>交费明细</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Jiaofei />
                                </Content>
                            </Route>
                            <Route path="/alayout/exams">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">考试管理</Breadcrumb.Item>
                                        <Breadcrumb.Item>考试班级</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Kaoshi />
                                </Content>
                            </Route>
                            <Route path="/alayout/evaluate">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>学员评价</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Pingjia />
                                </Content>
                            </Route>
                            <Route path="/alayout/Inquiry">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台</Breadcrumb.Item>
                                        <Breadcrumb.Item>教学测评</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Jxpj />
                                </Content>
                            </Route>
                            <Route path="/alayout/leave">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员考勤 </Breadcrumb.Item>
                                        <Breadcrumb.Item>学员请假</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Qingjia />
                                </Content>
                            </Route>
                            <Route path="/alayout/option12">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员考勤 </Breadcrumb.Item>
                                        <Breadcrumb.Item>学员违纪</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Weiji />
                                </Content>

                            </Route>
                            <Route path="/alayout/xiugai">
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }} className="content_top">
                                        <Breadcrumb.Item className="content_top1">学员后台 </Breadcrumb.Item>
                                        <Breadcrumb.Item>我的资料</Breadcrumb.Item>
                                        <Breadcrumb.Item>修改资料</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Xiugai />
                                </Content>
                            </Route>

                        </Switch>

                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>

        );
    }
}
