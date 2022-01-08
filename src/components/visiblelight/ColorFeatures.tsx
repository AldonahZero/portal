/*
 * File: Sub2.tsx
 * Desc: 异步子菜单
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Row, Col, Card, Select, Divider, Image, Switch } from 'antd';
import ReactEcharts from 'echarts-for-react';
const { Option } = Select;
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
const option = {
    title: {
        text: '颜色特征',
        subtext: '数据折线图',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['数据1'],
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} ',
        },
    },
    series: [
        {
            name: 'values',
            type: 'line',
            data: [10, 11, 29, 11, 12, 12, 9],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' },
                ],
            },
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
    ],
};

const ColorFeatures = () => (
    <div className="gutter-example">
        <Row gutter={24}>
            <Col className="gutter-row" md={6}>
                <div className="gutter-box">
                    <Card title="颜色特征" bordered={false}>
                        <Image
                            width={300}
                            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        />
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" md={14}>
                <div className="gutter-box">
                    <Card title="颜色特征" bordered={false}>
                        <ReactEcharts
                            option={option}
                            style={{ height: '300px', width: '100%' }}
                            className={'react_for_echarts'}
                        />
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" md={4}>
                <Card title="选择面板">
                    <Divider orientation="left">切换</Divider>
                    <Switch checkedChildren="主色" unCheckedChildren="灰度" defaultChecked />
                    <Divider orientation="left">目标种类</Divider>

                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Divider orientation="left">背景</Divider>
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
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

export default ColorFeatures;
