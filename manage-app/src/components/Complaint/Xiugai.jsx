import React from 'react'
import '../../assets/Xiugai.css'
import { Input, Icon } from 'antd';
import { Select } from 'antd';
import axios from 'axios';

const { Option } = Select;


const provinceData = ['广西壮族自治区', '广东省'];
const provinceDate = ['广西壮族自治区', '广东省'];

const citydate = {
    '广西壮族自治区': ['河池市', '南宁市'],
    '广东省': ['天河区', '越秀区']
}


const cityData = {
    '广西壮族自治区': ['广西大学', '广西民族师范学院', '广西民族大学'],
    '广东省': ['中山大学', '海洋大学', '广州石油大学'],
};
export default class Xiugai extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],

            city: citydate[provinceDate[0]],
            secity: citydate[provinceDate[0]][0],

            tel: '',
            qq: ''


        }
    }
    handleProvinceChange = value => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    };

    onSecondCityChange = value => {
        this.setState({
            secondCity: value,
        });
    };
    ProvinceChange = value => {
        this.setState({
            city: citydate[value],
            secity: citydate[value][0],
        });
    };

    SecondCityChange = value => {
        this.setState({
            secity: value,
        });
    };
    SecondChange = value => {
        this.setState({
            citycom: value,
        });
    };
    componentDidMount() {
        console.log(11111)
        let news = JSON.parse(window.sessionStorage.getItem('news'))
        this.setState({
            news: news[0]
        }, () => {
            console.log(this.state);
        })

    }
   
    saveqq(e) {
        this.setState({
            qq: e.target.value
        })

    }
    saveTel(e) {
        this.setState({
            tel: e.target.value
        })
    }
    saveItem() {
        axios.get('http://localhost:8000/xiugai',{params:{usercard:this.state.news.usercard,tel:this.state.tel,qq:this.state.qq}}).then(({data})=>{
            console.log(data);
            
        })

    }
    render() {
        const { cities } = this.state;
        return (
            <>
                <div className="xiugai-header">
                    <h3>编辑个人资料</h3>
                    <h4>以下资料请确保真实有效，请勿删除或随意填写。</h4>
                </div>

                <div className="xiugai-main">
                    <div className="tab-content">
                        <div className="from-group">
                            <div className="group-left" style={{ display: 'inline-block' }}>
                                <label style={{ color: 'red', width: '120px', display: 'inline-block', textAlign: 'right' }}> 学员姓名：</label>
                                <Input size="large" disabled placeholder={this.state.news.username} style={{ height: 60, width: '70%' }} />
                            </div>
                            <div className="group-right" style={{ display: 'inline-block' }}>
                                <label style={{ color: 'red' }}> 性别：</label>
                                <Select defaultValue="女" style={{ width: 200 }} >
                                    <Option value="jack">女</Option>
                                    <Option value="lucy">男</Option>

                                </Select>
                            </div>

                        </div>
                        <div className="from-group">
                            <div className="group-left" style={{ display: 'inline-block' }}>
                                <label style={{ color: 'red' }}>手机号码：</label>
                                <Input size="large" placeholder={this.state.news.tel} onBlur={this.saveTel.bind(this)} style={{ height: 60, width: 450 }} />
                            </div>
                        </div>
                        <div className="from-group">
                            <div className="group-left" style={{ display: 'inline-block' }} >
                                <label style={{ color: 'red' }}>QQ：</label>
                                <Input size="large" onBlur={this.saveqq.bind(this)} placeholder={this.state.news.qq} style={{ height: 60, width: 450 }} />
                            </div>
                        </div>
                        <div className="from-group">
                            <div className="group-left" style={{ display: 'inline-block' }}>
                                <label style={{ color: 'red' }}>身份证号：</label>
                                <Input size="large" placeholder={this.state.news.usercard} style={{ height: 60, width: 450 }} />
                            </div>
                        </div>
                        <div className="from-group">
                            <div className="group-left" style={{ display: 'inline-block' }}>
                                <label>学校省份：</label>
                                <Select
                                    defaultValue={provinceData[0]}
                                    style={{ width: 350, marginRight: 30 }}
                                    onChange={this.handleProvinceChange}
                                >
                                    {provinceData.map(province => (
                                        <Option key={province}>{province}</Option>
                                    ))}
                                </Select>
                                <label >大学名称：</label>
                                <Select
                                    style={{ width: 350 }}
                                    value={this.state.secondCity}
                                    onChange={this.onSecondCityChange}
                                >
                                    {cities.map(city => (
                                        <Option key={city}>{city}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <div className="from-group">
                            <div className="group-left" style={{ display: 'inline-block', marginRight: 30 }}>
                                <label style={{ width: '120px', display: 'inline-block', textAlign: 'right' }}> 在读状态：</label>
                                <Select defaultValue="大四" style={{ width: 350 }} >
                                    <Option value="jack">大四</Option>
                                    <Option value="lucy">大三</Option>
                                    <Option value="lucy1">大二</Option>
                                    <Option value="lucy2">大一</Option>
                                    <Option value="lucy3">在读</Option>
                                    <Option value="lucy4">应届</Option>
                                    <Option value="lucy5">非应届</Option>

                                </Select>
                            </div>
                            <div className="group-right" style={{ display: 'inline-block' }}>
                                <label style={{ width: '120px', display: 'inline-block', textAlign: 'right' }}> 学历：</label>
                                <Select defaultValue="本科" style={{ width: 350 }} >
                                    <Option value="jack">本科</Option>
                                    <Option value="lucy">专科</Option>
                                    <Option value="lucy4">高中</Option>
                                    <Option value="lucy1">博士</Option>
                                    <Option value="lucy2">硕士+</Option>
                                    <Option value="lucy3">高中以下</Option>

                                </Select>
                            </div>

                        </div>

                        <div className="from-group">
                            <div className="group-left" style={{ display: 'inline-block', marginRight: 30 }}>
                                <label style={{ width: '120px', display: 'inline-block', textAlign: 'right' }}> 专业类型：</label>
                                <Select defaultValue="计算机" style={{ width: 350 }} >
                                    <Option value="jack">计算机</Option>
                                    <Option value="lucy">非计算机</Option>
                                </Select>
                            </div>
                            <div className="group-right" style={{ display: 'inline-block', marginRight: 30 }}>
                                <label style={{ width: '120px', display: 'inline-block', textAlign: 'right' }}> 开发经验：</label>
                                <Select defaultValue="无" style={{ width: 350 }} >
                                    <Option value="jack">无</Option>
                                    <Option value="lucy">有</Option>

                                </Select>
                            </div>
                            <div className="group-right" style={{ display: 'inline-block' }}>
                                <label style={{ width: '120px', display: 'inline-block', textAlign: 'right' }}> 使用电脑：</label>
                                <Select defaultValue="个人携带" style={{ width: 350 }} >
                                    <Option value="jack">个人携带</Option>
                                    <Option value="lucy">学校配发</Option>
                                </Select>
                            </div>

                        </div>

                        <div className="from-group">
                            <div className="group-left" style={{ display: 'inline-block' }}>
                                <label>学校省份：</label>
                                <Select
                                    defaultValue={provinceDate[0]}
                                    style={{ width: 350, marginRight: 30 }}
                                    onChange={this.ProvinceChange}
                                >
                                    {provinceDate.map(province => (
                                        <Option key={province}>{province}</Option>
                                    ))}
                                </Select>
                                <label >大学名称：</label>
                                <Select
                                    style={{ width: 350 }}
                                    value={this.state.secity}
                                    onChange={this.SecondCityChange}
                                >
                                    {cities.map(city => (
                                        <Option key={city}>{city}</Option>
                                    ))}
                                </Select>

                            </div>
                        </div>
                        <div className="from-group">
                            <div className="group-left" style={{ marginRight: 30 }}>
                                <label style={{ width: 146 }}>紧急联系人：</label>
                                <Input size="large" placeholder='卓xx' style={{ height: 60, width: 350 }} />
                            </div>
                            <div className="group-left" style={{ marginRight: 30 }}>
                                <label>关系：</label>
                                <Input size="large" placeholder='母女' style={{ height: 60, width: 350 }} />
                            </div>
                            <div className="group-left" style={{ marginRight: 30 }}>
                                <label>联系电话：</label>
                                <Input size="large" placeholder='15233788890' style={{ height: 60, width: 350 }} />
                            </div>
                        </div>

                    </div>
                    <div className="handles">
                        <button className="checked" onClick={this.saveItem.bind(this)}>
                            <Icon type="check" />
                            &nbsp;
                            提交
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