/**
 * .
 */
import React from 'react';
import { Row, Col, Card, Button, Select } from 'antd';
import EchartsArea from './EchartsArea';
import EchartsPie from './EchartsPie';
import RechartsSimpleLineChart from './RechartsSimpleLineChart';
import EchartsForce from './EchartsForce';
import { Descriptions } from 'antd';
import MyDrawer from '../ui/MyDrawer';
import { Tag, Divider } from 'antd';

class GrayFeatureEcharts extends React.Component {
    render() {
        const { Option } = Select;
        function handleChange(value: any) {
            console.log(`selected ${value}`);
        }
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card title="边缘特征" bordered={false}>
                                <RechartsSimpleLineChart />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <Card title="选择面板">
                        <Divider orientation="left">目标种类</Divider>
                            
                            <Select
                                defaultValue="lucy"
                                style={{ width: 120 }}
                                onChange={handleChange}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            <Divider orientation="left">背景</Divider>
                            <Select
                                defaultValue="lucy"
                                style={{ width: 120 }}
                                onChange={handleChange}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GrayFeatureEcharts;
