import React from 'react';
import Tencent from './Tencent';
import ThisApp from './Map';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../../widget/BreadcrumbCustom';


const Index = () => (
    <div>
        <BreadcrumbCustom breads={['无人机', '地图']} />
        <Row gutter={16}>
            <Col md={24}>
                <div style={{ height: 700 }}>
                    <Card bordered={false} title="街道地图/卫星地图">
                        {/* <Tencent /> */}
                        <ThisApp/>
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);
export default Index;