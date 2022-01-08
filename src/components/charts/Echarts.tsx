/**
 * .
 */
import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import EchartsArea from './EchartsArea';
import EchartsPie from './EchartsPie';
import EchartsEffectScatter from './EchartsEffectScatter';
import EchartsForce from './EchartsForce';
import { Descriptions } from 'antd';
import MyDrawer from '../ui/MyDrawer';
import { Tag, Divider } from 'antd';

class Echarts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="地图面板" bordered={false}>
                                <EchartsEffectScatter />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <Card title="地理信息面板">
                            <Descriptions
                                title="地理信息"
                                bordered
                                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                            >
                                <Descriptions.Item label="Product">
                                    Cloud Database
                                </Descriptions.Item>
                                <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                                <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                                <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                                <Descriptions.Item label="Config Info">
                                    Data disk type: MongoDB
                                    <br />
                                    Database version: 3.4
                                    <br />
                                    Package: dds.mongo.mid
                                    <br />
                                    Storage space: 10 GB
                                    <br />
                                    Replication factor: 3
                                    <br />
                                    Region: East China 1
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                        <Card title="路径规划">
                            {/* <MyDrawer/> */}
                            <Button
                                type="primary"
                                onClick={() => {
                                    window.location.href =
                                        'http://localhost:3006/Amap_PathPlanning/test/index.lbs.html';
                                }}
                            >
                                路径规划
                            </Button>
                            <Divider orientation="left">Presets</Divider>
                            <div>
                                <Tag color="magenta">magenta</Tag>
                                <Tag color="red">red</Tag>
                                <Tag color="volcano">volcano</Tag>
                                <Tag color="orange">orange</Tag>
                                <Tag color="gold">gold</Tag>
                                <Tag color="lime">lime</Tag>
                                <Tag color="green">green</Tag>
                                <Tag color="cyan">cyan</Tag>
                                <Tag color="blue">blue</Tag>
                                <Tag color="geekblue">geekblue</Tag>
                                <Tag color="purple">purple</Tag>
                            </div>
                            <Divider orientation="left">Custom</Divider>
                            <div>
                                <Tag color="#f50">#f50</Tag>
                                <Tag color="#2db7f5">#2db7f5</Tag>
                                <Tag color="#87d068">#87d068</Tag>
                                <Tag color="#108ee9">#108ee9</Tag>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="区域图" bordered={false}>
                                <EchartsArea />
                            </Card>
                        </div>
                    </Col>
                </Row>
                {/* <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="关系图" bordered={false}>
                                { <EchartsGraphnpm/> }
                                <EchartsForce />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="饼图" bordered={false}>
                                <EchartsPie />
                            </Card>
                        </div>
                    </Col>
                </Row> */}
            </div>
        );
    }
}

export default Echarts;
