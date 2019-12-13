import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;
export default class Complaint extends React.Component {
    render() {
        return (
            <TextArea rows={16} />
        )
    }
}