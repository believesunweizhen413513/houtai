import React from 'react'

export default class Jiaofei extends React.Component {
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
        return (
            <>
                <h3 className="itemupload_title">交费详情</h3>
                <table className="table table-striped table-bordered table-hover">
                    <thead style={{ background: '#ccc' }}>
                        <tr>
                            <td style={{ width: '6%' }}>标题</td>
                            <td style={{ width: '4%' }}>金额</td>
                            <td style={{ width: '5%' }}>收据号/订单号</td>
                            <td style={{ width: '6%' }}>收据编号</td>
                            <td style={{ width: '4%' }}>入账地点</td>
                            <td style={{ width: '5%' }}>类型</td>
                            <td style={{ width: '4%' }}>操作人</td>
                            <td style={{ width: '4%' }}>状态</td>
                            <td style={{ width: '8%' }}>添加时间</td>
                            <td style={{ width: '4%' }}>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ background: '#f4f4f4' }}>
                            <td>{this.state.news.username} 押金</td>
                            <td>{this.state.news.yajin}</td>
                            <td>112703</td>
                            <td></td>
                            <td>{this.state.news.city}</td>
                            <td>个人支付宝</td>
                            <td>{this.state.news.doname}</td>
                            <td>{this.state.news.statues}</td>
                            <td>2019-07-24 15:28:36</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>{this.state.news.username} 学费</td>
                            <td>{this.state.news.xuefei}</td>
                            <td></td>
                            <td></td>
                            <td>{this.state.news.city}</td>
                            <td>百度贷款</td>
                            <td>{this.state.news.doname}</td>
                            <td>{this.state.news.statues}</td>
                            <td>2019-07-24 15:28:36</td>
                            <td></td>
                        </tr>
                        <tr style={{ background: '#f4f4f4' }}>
                            <td>{this.state.news.zhanzuo} 占座费</td>
                            <td>{this.state.news.city}</td>
                            <td></td>
                            <td></td>
                            <td>{this.state.news.city}</td>
                            <td>对公支付宝</td>
                            <td>{this.state.news.teacher}</td>
                            <td>{this.state.news.statues}</td>
                            <td>2018-12-23 20:57:18</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan="11" style={{ fontSize: '14px' }}><h5>学费总额：{this.state.news.conpost}  </h5>  (交费 - 退费)</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="itemupload_title" style={{ marginTop: '20px' }}>退费详情</h3>
                <table className="table table-striped table-bordered table-hover">
                    <thead style={{ background: '#ccc' }}>
                        <tr>
                            <td style={{ width: '6%' }}>标题</td>
                            <td style={{ width: '4%' }}>金额</td>
                            <td style={{ width: '5%' }}>收据号</td>
                            <td style={{ width: '7%' }}>收据编号</td>
                            <td style={{ width: '4%' }}>退费地点</td>
                            <td style={{ width: '4%' }}>操作人</td>
                            <td style={{ width: '8%' }}>添加时间</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ background: 'rgb(244, 244, 244)' }}>
                            <td colSpan="13">
                                <div className="dataTables_paginate paging_bootstrap" style={{ textAlign: 'center' }}>
                                    <ul className="pagination"></ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}