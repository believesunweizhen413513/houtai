import React from 'react'
export default class Weiji extends React.Component {
    render() {
        return (
            <>
                <div className="table-responsive" style={{ textAlign: 'center' }}>
                    <table id="sample-table-2" className="table table-bordered table-hover">
                        <thead>
                            <tr style={{ background: '#f2f2f2' }}>
                                <th width="5%">姓名</th>
                                <th width="5%">类型</th>
                                <th width="5%">扣除(分数)</th>
                                <th width="5%">剩余分数</th>
                                <th width="15%">理由</th>
                                <th width="5%">操作人</th>
                                <th width="10%">操作时间</th>
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