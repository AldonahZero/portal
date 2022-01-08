import React, { useState } from 'react';

import { Row, Col, Card } from 'antd';
import { Descriptions, Form, Input, Button, InputNumber } from 'antd';
import { Tag, Divider } from 'antd';
import { Cascader } from 'antd';
import c1 from '../../style/imgs/c1.png';
import Index from '../ui/map/index';
import MyAirportDrawer from '../ui/MyAirportDrawer';

const options = [
    {
        value: '多旋翼无人机',
        label: '多旋翼无人机',
        children: [
            {
                value: '多旋翼无人机 SC01',
                label: '多旋翼无人机 绕飞',
                children: [
                    {
                        value: '可见光',
                        label: '可见光',
                    },
                    {
                        value: '红外',
                        label: '红外',
                    },
                    {
                        value: '高光谱',
                        label: '高光谱',
                    },
                ],
            },
            {
                value: '多旋翼无人机 牛耕法',
                label: '多旋翼无人机 牛耕法',
                children: [
                    {
                        value: '可见光',
                        label: '可见光',
                    },
                    {
                        value: '红外',
                        label: '红外',
                    },
                    {
                        value: '高光谱',
                        label: '高光谱',
                    },
                ],
            },
        ],
    },
    {
        value: '固定翼无人机',
        label: '固定翼无人机',
        children: [
            {
                value: '固定翼无人机 SC02',
                label: '固定翼无人机 SC02',
                children: [
                    {
                        value: 'SAR',
                        label: 'SAR',
                    },
                ],
            },
        ],
    },
];

function onChange(value: any) {
    console.log(value);
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const Airport = () => {
    return (
        <div className="gutter-example">
            <Row gutter={16}>
                <Col className="gutter-row" md={6}>
                    <div className="gutter-box">
                        <Card title="无人机面板" bordered={false}>
                            <img src={c1} className="img-responsive img-circle" alt="test" />
                            <Cascader options={options} onChange={onChange} changeOnSelect />
                        </Card>
                        <Card title="飞行信息面板">
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    label="旁向重叠度"
                                    name="旁向重叠度"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        defaultValue={30}
                                        min={0}
                                        max={100}
                                        formatter={(value) => `${value}%`}
                                        parser={(value: any) => value.replace('%', '')}
                                        onChange={onChange}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="飞行速度"
                                    name="飞行速度"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        defaultValue={300}
                                        min={0}
                                        max={700}
                                        formatter={(value) => `${value}KMH`}
                                        parser={(value: any) => value.replace('%', '')}
                                        onChange={onChange}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="飞行高度"
                                    name="飞行高度"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        defaultValue={1800}
                                        min={0}
                                        max={3600}
                                        formatter={(value) => `${value}M`}
                                        parser={(value: any) => value.replace('%', '')}
                                        onChange={onChange}
                                    />
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                        <Card title="路径规划">
                            <MyAirportDrawer />
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
                    </div>
                </Col>
                <Col className="gutter-row" md={18}>
                    <div className="gutter-box">
                        <Card title="地图面板" bordered={false}>
                            <Index />
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" md={20}></Col>
                <Col className="gutter-row" md={16}>
                    <div className="gutter-box"></div>
                    {/* <Card title="风场面板" bordered={false}>
                            
                    </Card> */}
                </Col>
            </Row>
        </div>
    );
};

export default Airport;
