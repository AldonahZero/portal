/**
 *
 */
import React, { useState, useEffect, createContext } from 'react';
import { Row, Col, Card, Statistic, Button, message, notification } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import MyTreeSelect from '../../components/smenu/MyTreeSelect';
import { Checkbox, Avatar, Descriptions, Form } from 'antd';
import { Tag, Divider, Image } from 'antd';
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';
import axios from 'axios';
import { get, post } from '../../service/tools';
import { useHistory } from 'react-router-dom';



function PicChoose() {
    const [chooseLabel, setChooseLabel] = useState<Array<any>>([]); // 选择的多选标签
    const [checkAll, switchCheckAll] = useState<boolean>(false); // 全选flag
    const [indeterminate, setIndeterminate] = useState<boolean>(false);
    const [labelsList, setLabelsList] = useState<any[]>([]); // 标签列表
    const [initLabels, setInitLabels] = useState<any[]>([]); // 全部的标签labelKey组成的列表
    const [picdatas, setPicdatas] = useState<any[]>([]); // 后台数据
    const history = useHistory();

    useEffect(() => {
        getPicdata();
    }, []);

    useEffect(() => {
        return () => {};
    }, []);

    // 异步请求数据
    const getPicdata = () => {
        get({ url: '/getAllImage' })
            .then((res) => {
                setPicdatas(res.data);
                res.data.forEach((pic: { pid: any; url: string }) => {
                    initLabels.push(pic.pid);
                });
                console.log(initLabels);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const close = () => {
        console.log(
            'Notification was closed. Either the close button was clicked or duration time elapsed.'
        );
    };

    const openNotification = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                确定
            </Button>
        );
        // chooseLabel
        let pids = '/lhy?pids=';
        chooseLabel.forEach((label) => {
            pids = pids + label + ',';
        });
        pids = pids.length > 0 ? pids.substring(0, pids.length - 1) : pids;
        get({ url: pids })
        .then((res) => {
            console.log(res.data);
            // 跳转到指定路由
            history.push('/app/multifeatureanalysis/GrayFeature?data='+res.data);
            notification.open({
                message: '拼接任务提交成功',
                description: '任务已提交.',
                btn,
                key,
                onClose: close,
            });
        })
        .catch((err) => {
            console.log(err);
            notification.open({
                message: '拼接任务提交失败',
                description: '任务已失败.',
                btn,
                key,
                onClose: close,
            });
        });

    };

    const { Meta } = Card;
    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

    // 单选
    const checkThis = (e: any) => {
        console.log(initLabels);
        setChooseLabel(e);
        setIndeterminate(!!chooseLabel.length && chooseLabel.length < initLabels.length);
        switchCheckAll(chooseLabel.length === initLabels.length);
    };

    // 全选
    const onCheckAllChange = (e: any, type: number) => {
        console.log(initLabels);
        setChooseLabel(e.target.checked ? initLabels : []);
        setIndeterminate(false);
        switchCheckAll(e.target.checked);
    };

    return (
        <div className="gutter-example button-demo">
            <BreadcrumbCustom breads={['图片拼接', '服务端图片列表']} />
            <Row gutter={16}>
                <MyTreeSelect />
            </Row>
            <Card hoverable style={{ background: '#ffffff' }}>
                <Row gutter={16}>
                    <Descriptions title="文档信息">
                        <Col span={8}>
                            <Countdown title="文件总计" value={deadline} format="SSS B" />
                        </Col>
                        <Col span={8}>
                            <Countdown title="搜索耗时" value={deadline} />
                        </Col>
                        <Col span={24}>
                            <Countdown title="文件数" value={deadline} format="s 个" />
                        </Col>
                        <Col span={24}>
                            <Countdown title="共享的文件" value={'Hangzhou, Zhejiang'} />
                        </Col>
                        <Descriptions.Item label="已锁定">
                            <Tag icon={<SyncOutlined spin />} color="processing">
                                锁定中
                            </Tag>
                        </Descriptions.Item>
                        <Descriptions.Item label="只读模式">
                            <Tag icon={<CheckCircleOutlined />} color="success">
                                success
                            </Tag>
                        </Descriptions.Item>
                    </Descriptions>
                </Row>
            </Card>
            <Row>
                <div className="choose-group">
                    <Checkbox
                        className="choose-all"
                        indeterminate={indeterminate}
                        onClick={(e) => onCheckAllChange(e, 0)}
                        checked={checkAll}
                    >
                        全选
                    </Checkbox>
                    <span
                        className="choose-none"
                        onClick={(e) => {
                            switchCheckAll(false);
                            onCheckAllChange(e, 1);
                        }}
                    >
                        清除选择
                    </span>
                </div>
            </Row>

            <Divider className="divider" />

            <Form className="label-form" labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
                <Checkbox.Group value={chooseLabel} onChange={(e) => checkThis(e)} style={{}}>
                    <Row gutter={[16, 16]}>
                        {picdatas.map((v1: { pid: number; url: string }) => {
                            return (
                                <Col span={4}>
                                    <Form.Item label={v1.pid} key={v1.pid} className="one-part">
                                        <div className="gutter-box">
                                            <Card
                                                hoverable
                                                actions={[
                                                    <Checkbox
                                                        className="single-label"
                                                        key={v1.pid}
                                                        value={v1.pid}
                                                    >
                                                        <span key={v1.pid}>选择{v1.pid}</span>
                                                    </Checkbox>,
                                                ]}
                                            >
                                                <div>
                                                    <Image width="100%" src={v1.url} />
                                                </div>
                                                <Meta
                                                    avatar={
                                                        <Avatar src="https://img0.baidu.com/it/u=4270496049,167206765&fm=26&fmt=auto&gp=0.jpg" />
                                                    }
                                                    title="Dev"
                                                    description={v1.pid}
                                                />
                                            </Card>
                                        </div>
                                    </Form.Item>
                                </Col>
                            );
                        })}
                    </Row>
                </Checkbox.Group>
            </Form>
            {/* {picdatas.map((v1: { pid: number; url: string }) => (
                        <div className="gutter-box">
                            <Card hoverable actions={[<Checkbox></Checkbox>]}>
                                <div>
                                    <img
                                        onClick={() => this.openGallery(v1.url)}
                                        alt="大图"
                                        width="200"
                                        src={v1.url}
                                    />
                                </div>
                                <Meta
                                    avatar={
                                        <Avatar src="https://img0.baidu.com/it/u=4270496049,167206765&fm=26&fmt=auto&gp=0.jpg" />
                                    }
                                    title="Dev"
                                    description={v1.pid}
                                />
                            </Card>
                        </div>
                    ))} */}
            <Row gutter={[16, 16]}>
                <Col span={10} />
                <Col span={2}>
                    <Button type="primary" onClick={openNotification}>
                        计算特征
                    </Button>
                    ,
                </Col>
            </Row>
            <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
        </div>
    );
}

export default PicChoose;
