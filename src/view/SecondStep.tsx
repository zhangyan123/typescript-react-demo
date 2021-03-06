import * as React from 'react';
import { Input } from 'antd';

export default class SecondStep extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    {`您选择的是第`}
                    <span style={{ fontSize: 30, fontWeight: 'bold', }}>{this.props.estate.id}</span>
                    {`个楼盘`}
                </div>
                请填写备注信息：
                <div>
                    <Input
                        type="textarea"
                        onChange={this.props.setValue}
                        style={{ maxWidth: '200px' }}
                        placeholder="请输入备注信息"
                        autosize={true}
                    />
                </div>
            </div>
        );
    }
}