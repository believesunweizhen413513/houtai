import React, { Component } from 'react';
// import { Input, message } from 'antd';

// 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
import echarts from 'echarts'
import 'echarts/src/chart/pie';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import Option from '_rc-mentions@0.4.1@rc-mentions/lib/Option';

class Bing extends Component {


    componentDidMount() {
        var myChart = echarts.init(document.getElementById('dimensss'));
        myChart.setOption({
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        { value: 235, name: '中小型民营企业' },
                        { value: 274, name: '外包工司' },
                        { value: 310, name: '公务员' },
                        { value: 335, name: '国有企业' },
                        { value: 400, name: '自己创业' }
                    ]
                }
            ]
        })
        // let option = { series: [{ textStyle: { fontSize: '26px' } }] }
        let series={
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)',
                fontSize: '26px'
            }
        }

    }
    render() {
        return (
            <>
                <div id="dimensss" style={{ width: '700px', height: '500px', display: 'inline-block', fontSize: 26 }}>

                </div>
            </>
        )
    }
}

export default Bing;
