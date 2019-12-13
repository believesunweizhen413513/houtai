import React from 'react'
import { Icon } from 'antd';
import Complaint from './Complaint'
export default class VIP extends React.Component {
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
                <h5 className="stuvip_h5"><b style={{ color: 'red' }}>您还不是VIP学员，填写下面表单可以申请VIP学员！</b></h5>
                <div className="tab-content">
                    <div className="topTab-content1">
                        <p className="tos_text">学员姓名:</p>
                        <input type="text" name="StuName" disabled onChange={(event)=>{ change(event);}}  value={this.state.news.username || ''} readOnly required="required" />
                    </div>
                    <div className="topTab-content2">
                        <p className="tos_text">申请理由:</p>
                        < Complaint />
                    </div>
                    <div className="handles">
                        <button className="checked">
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
            </>
        )
    }
}