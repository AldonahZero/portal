/**
 * 
 */
import React from 'react';
import { Row, Col, Card, Timeline } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import EchartsDatas from './EchartsDatas'
import b1 from '../../style/imgs/b1.jpg';
import b2 from '../../style/imgs/b2.jpg';
import {
    CameraOutlined,
    CloudOutlined,
    HeartOutlined,
    MailOutlined,
    SyncOutlined,
} from '@ant-design/icons';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <HeartOutlined className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">关注</div>
                                        <h2>31</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <CloudOutlined type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">云端数据</div>
                                        <h2>3022</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <CameraOutlined className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">遥感图像</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MailOutlined className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">日志通知</div>
                                        <h2>10</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>任务</h3>
                                    <small>10个已经完成，2个待完成，1个正在进行中</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined />
                                </span>
                                <Timeline>
                                    <Timeline.Item color="green">图像拼接</Timeline.Item>
                                    <Timeline.Item color="green">路径规划</Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>联调接口</p>
                                        <p>功能验收</p>
                                    </Timeline.Item>

                                    <Timeline.Item color="#108ee9">
                                        <p>更多算法功能接入</p>
                                        <p>后台权限验证</p>
                                        <p>移动端</p>
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>日志栏</h3>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined />
                                </span>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">无人机「002」</span>
                                            <span className="text-muted">开始上升高度！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">无人机「001」</span>
                                            <span className="text-muted">四机位拍摄中!</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b2}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">图像拼接机「002」</span>
                                            <span className="text-muted">拼接任务图片上传中!</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b2}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">图像拼接机「001」</span>
                                            <span className="text-muted">
                                            拼接图片任务进行中!
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined type="sync" />
                                </span>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={16}>
                    <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>数据可视化</h3>
                                    <small>数据可视化展示</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined type="sync" />
                                </span>
                                <EchartsDatas/>
                            </Card>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
