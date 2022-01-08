import React, { Component } from 'react';
import { Result, Button, Card } from 'antd';

class Success extends React.Component {
    render() {
        return (
            <div>
                    <Result
                        status="success"
                        title="上传成功"
                        subTitle="图片已经上传成功了"
                        extra={[
                            <Button type="primary" key="console" onClick={()=>{window.location.href="/"}}>
                                返回首页
                            </Button>,
                                            ]}
                    />
            </div>
        );
    }
}
export default Success;
