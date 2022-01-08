/*
 * File: Sub2.tsx
 * Desc: 异步子菜单
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Row, Col, Card, Select, Divider, Image, Switch } from 'antd';
import { Table, Tag, Radio, Space } from 'antd';
import ReactEcharts from 'echarts-for-react';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: any) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any) => (
            <span>
                {tags.map((tag: any) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const { Option } = Select;
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
const option = {
    title: {
        text: '纹理特征',
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

const TextureFeatures = () => (
    <div className="gutter-example">
        <Row gutter={24}>
            <Col className="gutter-row" md={6}>
                <div className="gutter-box">
                    <Card title="纹理特征" bordered={false}>
                        <Image
                            width={300}
                            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        />
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" md={14}>
                <div className="gutter-box">
                    <Card title="纹理特征" bordered={false}>
                        <div>
                            <Table
                                columns={columns}
                                pagination={{ position: ['bottomCenter'] }}
                                dataSource={data}
                            />
                        </div>
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

export default TextureFeatures;
