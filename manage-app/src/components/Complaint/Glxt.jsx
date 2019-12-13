import React from 'react'
import {
    Link
    // Redirect
} from 'react-router-dom'
let bool = true
export default class Glxt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
        }
    }

    componentWillMount() {
        bool = true
    }
    componentDidMount() {
        console.log(11111)
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
             news:news[0]
        },()=>{
            console.log(this.state);
        })
       
    }
    shouldComponentUpdate() {
        if (bool) {
            return true
        } else {
            return false
        }
    }


    render() {
        console.log(this.state);
        return (
            <>
                <div className="myProfile" style={{ paddingBottom: '58px' }}>
                    <Link to='/alayout/xiugai'><button  type="button" className="btn btn-xs btn-primary" style={{ float: 'right', marginRight: '23px', width: '100px', height: '43px',color:'#fff' }}>修改</button></Link>
                </div>
                <div className="myProfile_right">
                    <div id="user-profile-1" className="user-profile row">
                        <span className="profile-picture">
                            <img id="avatar" style={{ width: '180px', height: '200px' }} className="editable img-responsive editable-click editable-empty" alt="请上传照片" src={this.state.news.img} />
                        </span>
                        <div className="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
                            <div className="inline position-relative">
                                <a className="user-title-label dropdown-toggle" data-toggle="dropdown">
                                    <i className="icon-circle light-green middle"></i>
                                    &nbsp;
        <span className="white">{this.state.news.username} &nbsp;&nbsp; (女) </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="profile-user-info profile-user-info-striped">
                        <div className="profile-info-row">
                            <div className="profile-info-name"> 身份证号码 </div>
                            <div className="profile-info-value">
                                <span id="showIdCard" className="profile-info-value">******************</span>
                                <a style={{ marginLeft: '50px' }} ></a>
                                <input type="hidden" id="idNumber" value="452728199610190026" />
                            </div>
                        </div>

                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> 手机号 </div>
                            <div className="profile-info-value">******************</div>
                        </div>
                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> QQ </div>
                            <div className="profile-info-value">******************</div>
                        </div>
                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> 学号 </div>
        <div className="profile-info-value"> {this.state.news.xuehao}</div>
                        </div>
                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> 毕业学院 </div>
        <div className="profile-info-value">{this.state.news.school}</div>
                        </div>
                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> 在校状态 </div>
                            <div className="profile-info-value"> {/* 大三 */}**</div>
                        </div>
                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> 学历 </div>
        <div className="profile-info-value">{this.state.news.xueli}</div>
                        </div>
                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> 千锋班级</div>
                            <div className="profile-info-value">{/* 广州HTML5就业班1909期 */}**** </div>
                        </div>
                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> 招生老师 </div>
        <div className="profile-info-value">{this.state.news.teacher}</div>
                        </div>
                        <div className="profile-info-row" style={{ height: '32px' }}>
                            <div className="profile-info-name"> 报名日期 </div>
        <div className="profile-info-value">{this.state.news.time}</div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <h5 style={{ fontSize: '15px', marginLeft: '10px' }}>[ <b>我的消息</b> ]</h5>
                    <table id="sample-table-2" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '24%' }}>消息</th>
                                <th style={{ width: '3%' }}>时间</th>
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
                <div className="table-responsive">
                    <h5 style={{ fontSize: '15px', marginLeft: '10px' }}>[ <b>班主任寄语</b> ]</h5>
                    <table id="sample-table-2" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '4%' }}>评价老师</th>
                                <th style={{ width: '20%' }}>寄语内容</th>
                                <th style={{ width: '5%' }}>时间</th>
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
                <div className="table-responsive">
                    <h5 style={{ fontSize: '15px', marginLeft: '10px' }}>[ <b>千锋其他会员开通</b> ]</h5>
                    <table id="sample-table-2" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '4%' }}>产品名称</th>
                                <th style={{ width: '20%' }}>产品描述</th>
                                <th style={{ width: '15%' }}>开通信息</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '4%', fontSize: '12px' }}>扣丁学堂</td>
                                <td style={{ width: '20%', fontSize: '12px' }}>扣丁学堂大量免费线上视频，不定期更新，为您规划职业路线。
                                                      <br />官方网站:<a>http://www.codingke.com</a>
                                </td>
                                <td style={{ width: '15%', fontSize: '12px' }}>
                                    <span style={{ color: 'red' }}>您还未开通扣丁学堂 </span>
                                    <button data-id="1" >立即开通</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>

        )
    }
    componentWillUnmount() {
        console.log('销毁');
        bool = false
    }
}