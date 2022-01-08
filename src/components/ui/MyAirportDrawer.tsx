import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import MyCheckBox from './MyCheckBox';
const { Option } = Select;

class MyAirportDrawer extends React.Component {
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
                    开始规划路径
                </Button>
                <Button type="primary" danger>
                    清除路径
                </Button>
                <Drawer
                    title="创建新的路径"
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <MyCheckBox />
                </Drawer>
            </>
        );
    }
}
export default MyAirportDrawer;
