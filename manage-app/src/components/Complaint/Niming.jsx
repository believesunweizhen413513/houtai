import React from 'react'
import {Icon } from 'antd';
import Complaint from './Complaint'
export default class Niming extends React.Component {
    render() {
        return (
            <div className="tab-content">
                <div className="topTab-content2">
                    <p className="tos_text">投诉内容:</p>
                    < Complaint />
                </div>
                <div className="handles">
                    <button className="checked">
                        <Icon type="check" />
                        &nbsp;
                        添加
                       </button>
                    <button className="adding">
                        <Icon type="undo" />
                        &nbsp;
                         返回
             </button>
                </div>
            </div>
        )
    }
}

