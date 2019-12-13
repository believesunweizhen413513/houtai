import React, { Component } from 'react';
// import { Input, message } from 'antd';
import Bing from './Bing'
import Shu from './Shu'

// 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Employment extends Component {
    render() {
        return (
            <div className="Employment-main">
                <Shu/>
                <Bing />
            </div>
        );
    }
}

export default Employment;


