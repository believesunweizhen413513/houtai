import React from 'react'
import { Icon } from 'antd';
import '../../assets/BasicInfo.css'
import axios from 'axios';
export default class BasicInfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            news:[]
        }
       
        
    }
    
    removeItem() {

    }
    changeItem() {

    }
    saveItem() {

    }
    componentDidMount() {
        let news=window.sessionStorage.getItem('news')
        // this.setState({
        //     news:news[0]
        // }) 
        console.log(news);
        
        setTimeout(()=>{
            axios.get('http://localhost:8000/uporder',{params:{usercard:this.state.news.usercard}}).then((data) => {
                console.log(data);
    
            })
        },2000)
    }
    render() {
        return (
            <>
                <div className="page-content">
                    <div className="table-responsive">
                        <table id="sample-table-2" className="table table-bordered table-hover">
                            <thead>
                                <tr style={{ background: '#f2f2f2' }}>
                                    <th width="8%">序号</th>
                                    <th width="8%">姓名</th>
                                    <th width="8%">学号</th>
                                    <th width="5%">学院</th>
                                    <th width="5%">专业</th>
                                    <th width="5%">班级</th>
                                    <th width="15%">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>卓欣欣</td>
                                    <td>160510301024</td>
                                    <td>物理与电子工程学院</td>
                                    <td>电子信息工程</td>
                                    <td>电子信息161班</td>
                                    <td>
                                        <button onClick={this.removeItem.bind(this)}>删除</button><button onClick={this.changeItem.bind(this)}>修改</button><button onClick={this.saveItem.bind(this)}>保存</button>
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


