import {Select, Input, } from 'antd';
import React from 'react'
import '../../assets/FamilyIfo.css'

const { Option,} = Select;


export default class FamilyIfo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            showInput:false,
        }
    }
    emitInput(){
        this.setState({
            showInput:false
        })
    }
    keepInput(){
        this.setState({
            showInput:true
        })
    }

    render() {
        return (
            <>
                <div className="header clearfix">
                    <div className="bottom fr">
                        <a id="emit" onClick={this.emitInput.bind(this)}>编辑</a>
                        <a id="keep" onClick={this.keepInput.bind(this)}>保存</a>
                    </div>
                </div>   
                <div className="BasicInformation">
                    <div className="title">
                        父母联系方式
                </div>
                </div>
                <div className="main">
                    <div className="content1">
                        <div className="content1-fl">
                            <div className="left-lucy" style={{ marginBottom: '50px' }}>
                                <label htmlFor="">关系：</label>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="母子"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">母子</Option>
                                    <Option value="lucy">母女</Option>
                                    <Option value="tom">父子</Option>
                                    <Option value="tom1">父女</Option>
                                </Select>

                            </div>
                            <div className="left-input">
                                <label htmlFor="">姓名：</label>
                                <Input disabled={this.state.showInput}  size="large" placeholder="" />
                            </div>
                        </div>
                        <div className="content1-fr">
                            <div className="none" style={{ marginBottom: '50px', opacity: '0' }} >
                                <label htmlFor="">姓名：</label>
                                <Input disabled={this.state.showInput} size="large" placeholder="" />
                            </div>
                            <label htmlFor="">电话号码：</label>
                            <Input disabled={this.state.showInput} size="large" placeholder="" />
                        </div>
                    </div>

                    <div className="BasicInformation" style={{ marginBottom: '50px', }}>
                        <div className="title">
                            户口信息
                </div>
                    </div>

                    <div className="content1">
                        <div className="content1-fl">
                            <div className="none" style={{ marginBottom: '50px' }} >
                                <label htmlFor="">邮政编码：</label>
                                <Input disabled={this.state.showInput} size="large" placeholder="" />
                            </div>

                            <div className="left-input">
                                <label htmlFor="">代码编号：</label>
                                <Input disabled={this.state.showInput} size="large" placeholder="" />
                            </div>

                        </div>
                        <div className="content1-fr">

                            <div className="left-lucy" style={{ marginBottom: '50px' }}>
                                <label htmlFor="">贫困等级：</label>
                                <Select
                                    showSearch
                                    style={{ width: 200, }}
                                    placeholder=""
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">一般</Option>
                                    <Option value="lucy">困难</Option>

                                </Select>

                            </div>
                            <label htmlFor="">电话号码：</label>
                            <Input disabled={this.state.showInput} size="large" placeholder="" />
                        </div>
                    </div>

                    <div className="input-pai" >
                        <div className="left-input" >
                            <label htmlFor="">派出所地址:</label>
                            <Input disabled={this.state.showInput} size="large" placeholder="" style={{ width: '680px',height:'58px' }} />
                        </div>

                    </div>
                    <div className="input-jia">
                        <div className="left-input" >
                            <label htmlFor="">家庭地址:</label>
                            <Input disabled={this.state.showInput} size="large" placeholder="" style={{width: '10.375rem',height:'58px',marginBottom:'30px' }}  />省<br/>
                            <Input disabled={this.state.showInput} size="large" placeholder="" style={{width: '13.375rem',height:'58px' }} />市
                            <Input disabled={this.state.showInput} size="large" placeholder="" style={{width: '13.375rem',height:'58px' }} />区/县
                            <Input disabled={this.state.showInput} size="large" placeholder="" style={{width: '13.375rem',height:'58px' }} />街道
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

