import React, { Component } from 'react';
// import { Input, message } from 'antd';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Shu extends Component {

    dimen() {
        var myChart = echarts.init(document.getElementById('dimen'));

        // 绘制图表
        myChart.setOption({
            title: { text: '就业情况' },
            tooltip: {},
            xAxis: {
                data: ["未找到工作", "正在实习期", "已找到工作", "在试用期"]
            },
            yAxis: {},
            series: [{
                name: '学生工作情况',
                type: 'bar',
                data: [5, 10, 56, 20]
            }]
        });

    }
    componentDidMount() {
        this.dimen()

    }
    render() {
        return (
            <>
                <div id="dimen" style={{ width: '700px', height: '500px',display:'inline-block' }}>

                </div>
            </>
        )
    }
}

export default Shu;


