/*
 * File: Sub2.tsx
 * Desc: 异步子菜单
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Layout, Card } from 'antd';
import { Row, Col } from 'antd';
import { Image, Button, Space } from 'antd';
import { Carousel } from 'antd';

const SmenuSub2 = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const [random, setRandom] = React.useState();
    return (
        <div>
            <BreadcrumbCustom breads={['服务器图片拼接']} />
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Card title="图片分辨率" bordered={false}>
                        <div>图片分辨率: 3040*4056</div>
                        <div>拼接张数: 3</div>
                        <div>拼接时间: 3.2秒</div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="结果图片" bordered={false}>
                        <div>图片分辨率: 827*832</div>
                        <div>类型: PNG RGBA32</div>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Card title="待拼接图像">
                        <Image
                            width={200}
                            src="http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_35-2.JPG"
                        />

                        <Image
                            width={200}
                            src="http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_51-7.JPG"
                        />
                        <Image
                            width={200}
                            src="http://127.0.0.1:5000/static/images/w/Qingdao-20210331-15_42_48-6.JPG"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="拼接结果">
                        <Image
                            width={200}
                            src="http://127.0.0.1:5000/static/w-[NISwGSP][3D][BLEND_AVERAGE].png"
                        />
                        {/* <Carousel autoplay>
        <div>
            <Image
                width={800}
                height={400}
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.agrs.cgs.gov.cn%2Fyyly%2F201608%2FW020160818633425497845.jpg&refer=http%3A%2F%2Fwww.agrs.cgs.gov.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744894&t=e3baebea6534f20bf388c8e87eac3b71"
            />
        </div>
        <div>
            <Image
                width={800}
                height={400}
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2F9026a4b3b8df4d459c740ed954dc4a99.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=c38f46f95e069d1b415b7cec8eade373"
            />
        </div>
        <div>
            <Image
                width={800}
                height={400}
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Fiaqqcc0RDB60jqeoGCcREG79sytRphDqbAFdv9ec6DlSa0Q1vB7x3OKSBVdicrQUgNWyK0nQYxyLF0YhIWKMvJKA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=7fc0b8a001f3f678f7784adf68965677"
            />
        </div>
        <div>
            <Image
                width={800}
                height={400}
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180523%2F60b4199bfdd244eaa7d9fefd38e44bd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620744512&t=870e0d1345a6b71c8e4b361265e56d48"
            />
        </div>
    </Carousel> */}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default SmenuSub2;
