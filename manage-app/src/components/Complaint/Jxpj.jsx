import React from 'react'
export default class Jxpj extends React.Component {
    render() {
        return (
            <>
                <div className="table-responsive">
                    <table id="sample-table-2" className="table table-bordered table-hover">
                        <thead>
                            <tr style={{ background: '#f2f2f2' }}>
                                <th width="15%">测评开始时间</th>
                                <th width="15%">测评结束时间</th>
                                <th width="5%">测评名称</th>
                                <th width="5%">讲师</th>
                                <th width="8%">操作</th>
                            </tr>
                        </thead>

                    </table>
                </div>
            </>
        )
    }
}