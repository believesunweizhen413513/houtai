import React from 'react'
import { Icon, Input,message,DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
export default class Qingjia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            value:''
        }
    }
    componentDidMount() {
        // console.log(11111)
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
            news: news[0],
           
        }, () => {
            console.log(this.state);
        })

    }
    getvalue(e){
        this.setState({
            value: e.target.value
        })
        console.log(e.target.value); 
    }
    pushdata(){
      
        this.setState({
            value: ''
        })
        message.success('This is a success message');
    }

    render() {
        let {change}=this.props
        return (
            <>
                <div className="tab-content">
                    <div className="topTab-content1">
                        <p className="tos_text">学员姓名:</p>
                        <input type="text" name="StuName" disabled onChange={(event)=>{change(event)}} value={this.state.news.username || ''} readOnly required="required" />
                    </div>
                    <div className="topTab-content2" style={{ marginBottom: 30 }}>
                        <p className="tos_text">请假理由: </p>
                        <TextArea rows={8} onChange={this.getvalue.bind(this)} placeholder="请输入请假理由" />
                    </div>
                    <div className="topTab-content2">
                        <p className="tos_text">请假时间: </p>
                        <RangePicker
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            showTime
                            format="YYYY/MM/DD HH:mm:ss"
                        />
                    </div>
                    <div className="handles">
                        <button className="checked" onClick={this.pushdata.bind(this)}>
                            <Icon type="check" />
                            &nbsp;
                            申请
                                           </button>
                        <button className="adding">
                            <Icon type="undo" />
                            &nbsp;
                             返回
                                           </button>
                    </div>
                </div>
                <div className="table-responsive">
                    <table id="sample-table-2" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th width="3%">姓名</th>
                                <th width="20%">问题理由</th>
                                <th width="8%">创建时间</th>
                                <th width="8%">回复</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="13">
                                    <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                        <ul className="pagination"></ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}