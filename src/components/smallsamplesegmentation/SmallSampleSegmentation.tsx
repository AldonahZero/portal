//
import React, { Component } from 'react';
import ImgCrop from 'antd-img-crop'; //引入图片裁剪组件
import { Upload, Button, Modal, message, Row, Col, Card, Image } from 'antd'; //引入上传、按钮、弹窗等antd组件
import { PlusOutlined } from '@ant-design/icons';


//base64图片文件
function getBase64(file: any) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

class SmallSampleSegmentation extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
    };
    //图片预览取消函数
    handleCancel = () => this.setState({ previewVisible: false }); //图片预览弹窗函数
    handlePreview = async (file: any) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    }; //上传文件改变时的状态，详情可以参考antd的Upload组件API参数
    onChange = ({ fileList }: any) => {
        this.setState({ fileList });
    };

    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state; //根据官方属性定制化裁剪框大小固定的裁剪组件属性
        const props = {
            width: 500, //裁剪宽度
            height: 300, //裁剪高度
            resize: false, //裁剪是否可以调整大小
            resizeAndDrag: true, //裁剪是否可以调整大小、可拖动
            modalTitle: '上传图片', //弹窗标题
            modalWidth: 600, //弹窗宽度
            grid: true, //网格
        };
        const uploadButton = (
            <div>
                <PlusOutlined/>
                <div style={{ marginTop: 8 }}>上传</div>
            </div>
        );
        return (
            <div>
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card title="图片上传裁剪" bordered={false}>
                                    <ImgCrop {...props}>
                                        <Upload
                                            name="file"
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            accept="image/*"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={this.handlePreview}
                                            onChange={this.onChange}
                                        >
                                            {fileList.length >= 4 ? null : uploadButton}　
                                            {/* {通过三木运算符判断文件列表fileList的长度来决定上传图片的数量，达到控制图片数量的功能} */}
                                        </Upload>
                                    </ImgCrop>
                                    {/* {图片预览弹出框：可以实时查看上传的图片} */}
                                    <Modal
                                        visible={previewVisible}
                                        footer={null}
                                        onCancel={this.handleCancel}
                                        title={previewTitle}
                                    >
                                        <img
                                            alt="example"
                                            style={{ width: '100%' }}
                                            src={previewImage}
                                        />
                                    </Modal>
                                </Card>
                            </div>
                        </Col>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card title="分割后图片" bordered={false}>
                                        <Image
                                            width={200}
                                            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                                        />
                                        <Image
                                            width={200}
                                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                        />
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default SmallSampleSegmentation;
