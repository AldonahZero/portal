/**
 *
 */
import React,  { useState, useEffect } from 'react';
import { Row, Col, Card, Statistic ,Button,message,notification} from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import MyTreeSelect from './MyTreeSelect';
import { Checkbox, Avatar, Descriptions } from 'antd';
import { Tag, Divider } from 'antd';
import {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';
import axios from 'axios';

class SmenuSub3 extends React.Component {
     state = {
        gallery: null,
    };
    componentDidMount() {}
    componentWillUnmount = () => {
        this.closeGallery();
    };
    pswpElement: any;
    gallery: any;
    openGallery = (item: any) => {
        const items = [
            {
                src: item,
                w: 0,
                h: 0,
            },
        ];
        const pswpElement = this.pswpElement;
        const options = { index: 0 };
        this.gallery = new PhotoSwipe(pswpElement, PhotoswipeUIDefault, items, options);
        this.gallery.listen('gettingData', (index: number, item: any) => {
            const _this = this;
            if (item.w < 1 || item.h < 1) {
                // unknown size
                var img = new Image();
                img.onload = function () {
                    // will get size after load
                    item.w = (this as any).width; // set image width
                    item.h = (this as any).height; // set image height
                    _this.gallery.invalidateCurrItems(); // reinit Items
                    _this.gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });
        this.gallery.init();
    };
    closeGallery = () => {
        if (!this.gallery) return;
        this.gallery.close();
    };
            // ];
    render() {
        const close = () => {
            console.log(
              'Notification was closed. Either the close button was clicked or duration time elapsed.',
            );
          };
          
          const openNotification = () => {
            const key = `open${Date.now()}`;
            const btn = (
              <Button type="primary" size="small" onClick={() => notification.close(key)}>
                确定
              </Button>
            );
            notification.open({
              message: '拼接任务提交成功',
              description:
                '任务已提交.',
              btn,
              key,
              onClose: close,
            });
          };
          
        const { Meta } = Card;
        const { Countdown } = Statistic;
        const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
        let imgs = [
            [
                "http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_35-2.JPG",
                "http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_51-7.JPG",
                "http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_48-6.JPG",
                "http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_55-8.JPG",
                "http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_38-3.JPG",
                "http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_41-4.JPG",
                "http://127.0.0.1:5000/static/images/w/Qingdao.jpg",
                "http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_45-5.JPG"
            ]
        ]
        // const [imgs, setImgs] = useState([[]]);


        // useEffect(() => {
        //     const fetchData = async () => {
        //       const result = await axios(
        //         '/getAllImages',
        //       );
         
        //       setImgs(result.data);
        //     };
         
        //     fetchData();
        //   }, [[]]);

        // const npmDependencies = () =>
        //     axios
        //         .get('/getAllImages')
        //         .then(function (res) {
                    
        //             imgs = res.data.data;
        //             console.log(imgs)
        //         })
        //         .catch((err) => console.log(err));
        // npmDependencies();

        // const imgsTag = imgs.map((v1) =>
        //     v1.map((v2) => (

        //     ))
        // );
        // console.log(imgsTag)
        console.log(imgs)
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
                <Row gutter={10}>
                    {imgs.map((v1) =>
            v1.map((v2) => (
                <div className="gutter-box" key={v2}>
                    <Card hoverable actions={[<Checkbox></Checkbox>]} >
                        <div>
                            <img
                                onClick={() => this.openGallery(v2)}
                                alt="example"
                                width="200"
                                src={v2}
                            />
                        </div>
                        <Meta
                            avatar={
                                <Avatar src="https://img0.baidu.com/it/u=4270496049,167206765&fm=26&fmt=auto&gp=0.jpg" />
                            }
                            title="Dev"
                            description="多波段数据与路径分析"
                        />
                    </Card>
                </div>
            ))
        )}
                </Row>
                <Row gutter={[16, 16]}>
                <Col span={10}/>
                <Col span={2}>
                    <Card title="前往拼接" bordered={false}>
                    <Button type="primary" onClick={openNotification}>
    前往拼接
  </Button>,
                    </Card>
                </Col>
            </Row>
                <div
                    className="pswp"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                    ref={(div) => {
                        this.pswpElement = div;
                    }}
                >
                    <div className="pswp__bg" />

                    <div className="pswp__scroll-wrap">
                        <div className="pswp__container">
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter" />

                                <button
                                    className="pswp__button pswp__button--close"
                                    title="Close (Esc)"
                                />

                                <button
                                    className="pswp__button pswp__button--share"
                                    title="Share"
                                />

                                <button
                                    className="pswp__button pswp__button--fs"
                                    title="Toggle fullscreen"
                                />

                                <button
                                    className="pswp__button pswp__button--zoom"
                                    title="Zoom in/out"
                                />

                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip" />
                            </div>

                            <button
                                className="pswp__button pswp__button--arrow--left"
                                title="Previous (arrow left)"
                            />

                            <button
                                className="pswp__button pswp__button--arrow--right"
                                title="Next (arrow right)"
                            />

                            <div className="pswp__caption">
                                <div className="pswp__caption__center" />
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
            </div>
        );
    }
}

export default SmenuSub3;
