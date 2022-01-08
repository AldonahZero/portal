/*
 * File: Sub2.tsx
 * Desc: 异步子菜单
 */
import React, { useState, useEffect } from 'react';

import { Spin, Alert, Row, Col, Card, Result, Button } from 'antd';

const ThreeDimensionalFeatureReconstruction = () => {
   const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(function () {
            window.open('http://127.0.0.1:8088/zhongdiansuo/web/index.html', '_blank');
            // window.location.href = 'http://localhost:8080';
            setLoading(false);
        }, 2500);
    }, []);

    return (
        <div>
            <div className="gutter-example">
                <Row gutter={[24, 48]}>
                    <Col span={8} />
                    <Col span={8} />
                    <Col span={8} />

                    <Col span={8} />
                    <Col span={8}>
                        <Spin tip="Loading..." spinning={loading}>
                        {
                            loading?(
                                <Alert message="加载中" description="当前请不要刷新页面" type="info" />
                            ):(
                                <Result
                                status="success"
                                title="访问完成!"
                                subTitle=""
                                extra={[
                                    <Button type="primary" key="console" onClick={() => {
                                        window.location.href =
                                            'http://localhost:3006';
                                    }}>
                                        返回首页
                                    </Button>,
                                    <Button key="buy" onClick={() => {
                                        window.open('http://127.0.0.1:8088/zhongdiansuo/web/index.html', '_blank');
                                    }}>再次访问三维重建</Button>,
                                ]}
                            />
                            )
                        }
                            

                        </Spin>
                        
                        ,
                    </Col>
                    <Col span={8} />
                </Row>
                <Row gutter={[24, 48]}>
                    <Col span={8} />
                    <Col span={8} />
                    <Col span={8} />
                </Row>
            </div>
        </div>
    );
};

export default ThreeDimensionalFeatureReconstruction;
