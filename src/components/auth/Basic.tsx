import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import beauty from '@/style/imgs/beauty.jpg';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { AuthWidget } from '../widget';

class Basic extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom breads={['权限管理', '基础演示']} />
                <AuthWidget
                    children={(auth: any) => (
                        <Row>
                            <Col span={24}>
                                <Card bordered={false} bodyStyle={{ minHeight: 600 }}>
                                    {!auth.uid && (
                                        <h2 style={{ height: 500 }} className="center">
                                            登录之后你将看到一张风景图
                                        </h2>
                                    )}
                                    {auth.permissions &&
                                        auth.permissions.includes('auth/authPage/visit') && (
                                            <div style={{ textAlign: 'center' }}>
                                                <img src={beauty} alt="" style={{ height: 400 }} />
                                                {(auth.permissions.includes(
                                                    'auth/authPage/edit'
                                                ) && (
                                                    <div>
                                                        <p>
                                                            看点美景啦~
                                                            <span
                                                                role="img"
                                                                aria-label=""
                                                                aria-labelledby=""
                                                            >
                                                                😄😄
                                                            </span>
                                                        </p>
                                                        <p>管理员身份登录才能看到这两段话</p>
                                                    </div>
                                                )) || (
                                                    <div>
                                                        <p>管理员登录将看到不一样的效果</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                </Card>
                            </Col>
                        </Row>
                    )}
                />
            </div>
        );
    }
}

export default Basic;
