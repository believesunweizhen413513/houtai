import React from 'react'
import { Icon } from 'antd';
import Complaint from './Complaint'
export default class Zhoubao extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
        }
    }
    componentDidMount() {
        // console.log(11111)
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
            news: news[0]
        }, () => {
            console.log(this.state);
        })

    }
    render() {
        let {change} = this.props;
        return (
            <>
                <div className="tab-content">
                    <div className="topTab-content1">
                        <p className="tos_text">学员姓名:</p>
                        <input type="text" name="StuName" disabled  onChange={(event)=>{ change(event);}} value={this.state.news.username || ''} readOnly required="required" />
                    </div>
                    <div className="topTab-content1">
                        <p className="tos_text">周报标题:</p>
                        <input type="text" name="StuName" value="请填写周报标题" readOnly required="required" />
                    </div>
                    <div className="topTab-content2">
                        <p className="tos_text">周报内容: </p>
                        < Complaint />
                    </div>
                    <div className="handles">
                        <button className="checked">
                            <Icon type="check" />
                            &nbsp;
                            提问
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
                                <th width="8%">周报标题</th>
                                <th width="20%">周报内容</th>
                                <th width="8%">周报状态</th>
                                <th width="8%">创建时间</th>
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