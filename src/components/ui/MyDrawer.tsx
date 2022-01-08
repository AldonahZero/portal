import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;

class MyDrawer extends React.Component {
    state = { visible: false, childrenDrawer: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    render() {
        return (
            <>
                <Button type="primary" onClick={this.showDrawer}>
                    路径规划
                </Button>
                <Drawer
                    title="创建新的路径"
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Button type="primary" onClick={this.showChildrenDrawer}>
                        创建
                    </Button>
                    <Drawer
                        title="新路径参数"
                        width={320}
                        closable={false}
                        onClose={this.onChildrenDrawerClose}
                        visible={this.state.childrenDrawer}
                    >
                        <Form layout="vertical" hideRequiredMark>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="name"
                                        label="Name"
                                        rules={[
                                            { required: true, message: 'Please enter user name' },
                                        ]}
                                    >
                                        <Input placeholder="Please enter user name" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="url"
                                        label="Url"
                                        rules={[{ required: true, message: 'Please enter url' }]}
                                    >
                                        <Input
                                            style={{ width: '100%' }}
                                            addonBefore="http://"
                                            addonAfter=".com"
                                            placeholder="Please enter url"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="owner"
                                        label="Owner"
                                        rules={[
                                            { required: true, message: 'Please select an owner' },
                                        ]}
                                    >
                                        <Select placeholder="Please select an owner">
                                            <Option value="xiao">Xiaoxiao Fu</Option>
                                            <Option value="mao">Maomao Zhou</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="type"
                                        label="Type"
                                        rules={[
                                            { required: true, message: 'Please choose the type' },
                                        ]}
                                    >
                                        <Select placeholder="Please choose the type">
                                            <Option value="private">Private</Option>
                                            <Option value="public">Public</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="approver"
                                        label="Approver"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please choose the approver',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Please choose the approver">
                                            <Option value="jack">Jack Ma</Option>
                                            <Option value="tom">Tom Liu</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item
                                        name="description"
                                        label="Description"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'please enter url description',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea
                                            rows={4}
                                            placeholder="please enter url description"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Drawer>
                </Drawer>
            </>
        );
    }
}
export default MyDrawer;
