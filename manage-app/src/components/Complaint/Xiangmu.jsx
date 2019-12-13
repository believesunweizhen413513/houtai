import React from 'react'
import {  Icon } from 'antd';
export default class Xiangmu extends React.Component {
    render() {
        return (
            <>
                <h3 className="itemupload_title">学员项目上传</h3>
                <div className="tab-content">
                    <div className="itemupload_bottom">
                        <label className="col-sm-2 control-label no-padding-right" style={{ color: 'red' }}> 项目文件： </label>
                        <input type="file" name="itemupload" id="file"></input>
                        <span style={{ color: 'red' }}><b>注：请上传格式为【zip,rar】的压缩包,上传大小不得超过10M！</b></span>
                    </div>
                    <div className="handles">
                        <button className="checked">
                            <Icon type="check" />
                            &nbsp;
                            提问
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