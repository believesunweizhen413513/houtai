import React from 'react'
import { Input,message } from 'antd';
import '../../assets/Person.css'
import axios from 'axios'
export default class Person extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            showInput: false,
            tel: ''
        }
    }
    toggle(event) {
        this.setState({
            tel: event.target.value,

        })
        // console.log(event.target.value);

    }
    componentDidMount() {
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
            news: news[0]
        })
        // console.log(news);

    }
    async keepInput() {
        this.setState({
            showInput: true
        })
        await axios.get('http://localhost:8000/ordeing', { params: { usercard: this.state.news.usercard, tel: this.state.tel } }).then(({ data }) => {
            console.log(data);
            if (data == 2) {
                message.success('修改成功');
                axios.get('http://localhost:8000/order', { params: { usercard: this.state.news.usercard, password: this.state.news.password } }).then(({ data }) => {
                    console.log(data);
                    if (data) {
                        window.sessionStorage.setItem('news', JSON.stringify(data))
                    }
                })
            } else {
                message.error('修改失败');
            }


        })
    }
    setInput() {
        this.setState({
            showInput: false
        })
    }

    render() {
        let { change } = this.props
        return (
            <>
                <div className="person-content">
                    <div className="person-main">
                        <div className="person-header">
                            <div className="bottom fr">
                                <a id="emit" onClick={this.setInput.bind(this)}>编辑</a>
                                <a id="keep" onClick={this.keepInput.bind(this)}>保存</a>
                            </div>
                        </div>
                        <div className="form-grounp">
                            <div className="form-left">
                                <label>姓名：</label>
                                <Input disabled={true} placeholder={this.state.news.username || ''} />
                            </div>
                            <div className="form-right">
                                <label>手机号：</label>
                                <Input disabled={this.state.show} onChange={this.toggle.bind(this)} placeholder={this.state.news.tel} />
                            </div>
                        </div>
                        <div className="form-grounp">
                            <div className="form-left">
                                <label>性别：</label>
                                <Input disabled={this.state.show} placeholder="" value='女' />
                            </div>
                            <div className="form-right">
                                <label>民族：</label>
                                <Input disabled={this.state.show} placeholder="" value='汉族' />
                            </div>
                        </div>
                        <div className="form-grounp">
                            <div className="form-left">
                                <label> QQ ：</label>
                                <Input disabled={this.state.show} placeholder={this.state.news.qq || ''} />
                            </div>
                            <div className="form-right">
                                <label>电子邮箱：</label>
                                <Input disabled={this.state.show} placeholder={this.state.news.qq + '@qq.com' || ''} />
                            </div>
                        </div>
                        <div className="form-grounp">
                            <div className="form-left">
                                <label>出生日期：</label>
                                <Input disabled={this.state.show} placeholder="1997-10-13" />
                            </div>
                            <div className="form-right">
                                <label>政治面貌：</label>
                                <Input disabled={this.state.show} placeholder="预备党员" />
                            </div>
                        </div>
                        <div className="form-grounp">
                            <div className="form-left" style={{ width: '80%' }}>
                                <label>身份证号：</label>
                                <Input disabled={this.state.show} placeholder={this.state.news.usercard || ''} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
} 
