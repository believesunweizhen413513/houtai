import React from 'react'
import { Icon } from 'antd';
export default class Pingjia extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    <div className="page-header">
                        <div className="alert alert-block alert-success">
                            <Icon type="check" className="icon-ok green" />
                            您的满意是对我们最好的评价，您的批评是给我们最大的改进动力，欢迎同学对千锋提出宝贵的批评和建议。
                                             </div>
                    </div>
                    <div className="table-responsive">
                        <table id="sample-table-2" className="table table-bordered table-hover">
                            <thead>
                                <tr style={{ background: '#f2f2f2' }}>
                                    <th width="8%">测评开始时间</th>
                                    <th width="8%">测评结束时间</th>
                                    <th width="15%">评价对象</th>
                                    <th width="5%">讲师</th>
                                    <th width="5%">班主任</th>
                                    <th width="5%">就业老师</th>
                                    <th width="5%">操作</th>
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
                </div>
            </>
        )
    }
}