import { Divider, Tooltip, Input, Icon ,message} from 'antd';
import React from 'react'
import '../../assets/login.css'
// import { createHashHistory } from 'history'; // 如果是hash路由
// import { createBrowserHistory } from 'history'; // 如果是history路由

import axios from 'axios'

// const history = createBrowserHistory();
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      usercard: '',
      password: '',
    }
  }
  toggle(event) {
    this.setState({
      usercard: event.target.value,

    })
  }
  password(event) {
    this.setState({
      password: event.target.value
    })

  }
 
  async getInputValue() {
    const data = await axios.get('http://localhost:8000/order', { params: { usercard: this.state.usercard, password: this.state.password } })
    
    if (data.data.length > 0) {
      window.sessionStorage.setItem('news', JSON.stringify(data.data))
      // 判断是否有管路员的身份，根据身份不同跳转到不同页面
      if (data.data[0].admitname) {
        message.success('登录成功');
        setTimeout(() => {
          window.location.href = '/mangen'
          // 正常情况下用这种方式，但是这种方式只能跳一级，/alayout这种的前提是路由不在同一个组件里面，所以建议路由都写在一个组件里面，不要写在样式里面
          //  特别注意要引用 import { createBrowserHistory } from 'history'; // 如果是history路由  const history = createBrowserHistory();
          // history.push('/mangen');
        }, 1000)
      
      }else{
        message.success('登录成功');
      setTimeout(()=>{
        window.location.href = '/alayout/profile'
      })
      }
    }else{
      message.error('用户名或密码不正确');
    }

  }


  render() {
    return (
      <div className="login">
        <div className="login-layout" style={{ background: ' #6fb3e0' }}>
          <div className="login-box">
            <h4>学员后台管理系统</h4>
            <div className="shenfen">
              <Input ref={'username'} style={{ height: '70px', marginBottom: 30, marginTop: 30 }}
                placeholder="身份证号码/学号"
                onChange={this.toggle.bind(this)}
                suffix={
                  <Tooltip title="Extra information">
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </div>
            <div className="mima">
              <Input.Password ref={'password'} style={{ height: '70px' }}
                placeholder="密码"
                onChange={this.password.bind(this)}
              />
            </div>
            <div className="bottom-box">
              <button

                onClick={this.getInputValue.bind(this)}>
                <i><Icon type="key" /></i>登录
              </button>
            </div>
            <div className="fenge">
              <Divider>  <a style={{ color: '#f6003c' }}>切换新版学员系统，抢先体验</a></Divider>
            </div>
            <div className="toolbar">
              <div className="xuexi">
                <a>学习总结入口</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


}