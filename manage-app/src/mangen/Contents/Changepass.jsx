import React from 'react'
import '../../assets/Changepass.css'
import { Input, message } from 'antd';
import axios from 'axios';

export default class Changepass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oldpass: '',
            newpass: '',
            quepass: '',
            news: []
        }
    }
    componentDidMount() {
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
            news: news[0]
        })
    }
    async Oldtoggel(event) {
        this.setState({
            oldpass: event.target.value
        })
        // console.log(event.target.value);
        await axios.get('http://localhost:8000/pass', { params: { oldpass: event.target.value, usercard: this.state.news.usercard } }).then((data) => {
            // console.log(data.data);
            if (data.data.length > 0) {
                message.success('原密码正确');
            } else {
                message.error('原密码错误');
            }

        })


    }
    Newtoggel(event) {
        this.setState({
            newpass: event.target.value
        })
    }
    toggel(event) {
        this.setState({
            quepass: event.target.value
        })

    }
    async changpass(event) {
        if (this.state.quepass == this.state.newpass) {
            await axios.get('http://localhost:8000/chanpass', { params: { oldpass: this.state.oldpass, usercard: this.state.news.usercard, newpass: this.state.newpass } }).then(({ data }) => {
                // console.log(data);    
            if (data == 2) {
                    message.success('修改成功');
                    axios.get('http://localhost:8000/uporder', { params: { usercard: this.state.news.usercard } }).then((data) => {
                        // console.log(data);
                        if (data) {
                            window.sessionStorage.setItem('news', JSON.stringify(data))
                        }
                    })

                }else{
                    message.error('修改失败'); 
                }
                // console.log(data);


            })
        }

    }
    render() {
        return (
            <>
                <div className="changepass-content">
                    <div className="changepass-main">
                        <div className="content">
                            <div className="changepass-form">
                                <label htmlFor="">原密码：</label>
                                <Input.Password onBlur={this.Oldtoggel.bind(this)} placeholder="" />
                            </div>
                            <div className="changepass-form">
                                <label htmlFor="">新密码：</label>
                                <Input.Password onBlur={this.Newtoggel.bind(this)} placeholder="" />
                            </div>
                            <div className="changepass-form">
                                <label htmlFor="">确认密码：</label>
                                <Input.Password onBlur={this.toggel.bind(this)} placeholder="" />
                            </div>
                            <div className="changepass-button">
                                <button onClick={this.changpass.bind(this)}>
                                    提交
                      </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}