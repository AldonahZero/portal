import React, { useState } from 'react';
import { Button } from 'antd';
import { Map, MouseTool } from 'react-amap';

const layerStyle = {
    padding: '10px',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    position: 'absolute',
    top: '10px',
    left: '10px',
};

class ThisApp extends React.Component {
    toolEvents: any;
    tool: any;
    mapPlugins: any;
    mapCenter: any;
    constructor(props: any) {
        super(props);
        const self = this;
        this.toolEvents = {
            created: (tool: any) => {
                console.log(tool);
                self.tool = tool;
            },
            draw({ obj }: any) {
                self.drawWhat(obj);
            },
        };
        this.mapPlugins = [
            'ToolBar',
            'MapType',
            'Scale',
            'OverView',
            'ControlBar', // v1.1.0 新增
            {
                name: 'ToolBar',
                options: {
                    visible: true, // 不设置该属性默认就是 true
                    onCreated(ins: any) {
                        console.log(ins);
                    },
                },
            },
        ];
        this.mapCenter = { longitude: 116.212034, latitude: 39.933657 };
    }

    drawWhat(obj: any) {
        let text = '';
        switch (obj.CLASS_NAME) {
            case 'AMap.Marker':
                text = `你绘制了一个标记，坐标位置是 {${obj.getPosition()}}`;
                break;
            case 'AMap.Polygon':
                text = `你绘制了一个多边形，有${obj.getPath().length}个端点`;
                break;
            case 'AMap.Circle':
                text = `你绘制了一个圆形，圆心位置为{${obj.getCenter()}}`;
                break;
            default:
                text = '';
        }
        console.log(text);
        this.setState({
            what: text,
        });
    }

    drawCircle() {
        if (this.tool) {
            this.tool.circle();
            this.setState({
                what: '准备绘制圆形',
            });
        }
    }

    drawRectangle() {
        if (this.tool) {
            this.tool.rectangle();
            this.setState({
                what: '准备绘制多边形（矩形）',
            });
        }
    }

    drawMarker() {
        if (this.tool) {
            this.tool.marker();
            this.setState({
                what: '准备绘制坐标点',
            });
        }
    }

    drawPolygon() {
        if (this.tool) {
            this.tool.polygon();
            this.setState({
                what: '准备绘制多边形',
            });
        }
    }

    close() {
        if (this.tool) {
            this.tool.close();
        }
        this.setState({
            what: '关闭鼠标工具',
        });
    }

    render() {
        return (
            <div>
                <div style={{ width: '100%', height: 500 }}>
                    <Map
                        plugins={this.mapPlugins}
                        center={this.mapCenter}
                        zoom={18}
                        amapkey={'b3711b3d91abf28ac9e9403ffc5299b5'}
                    >
                        <MouseTool events={this.toolEvents} />
                    </Map>
                </div>
                <Button
                    onClick={() => {
                        this.drawMarker();
                    }}
                >
                    添加兴趣点
                </Button>
                <Button
                    onClick={() => {
                        this.drawRectangle();
                    }}
                >
                    添加区域（矩形）
                </Button>
                <Button
                    onClick={() => {
                        this.drawCircle();
                    }}
                >
                    设置飞行半径
                </Button>
                <Button
                    onClick={() => {
                        this.drawPolygon();
                    }}
                >
                    添加区域
                </Button>
                <Button
                    onClick={() => {
                        this.close();
                    }}
                >
                    关闭鼠标工具
                </Button>
                <Button
                    onClick={() => {
                        window.open(
                            'http://localhost:3006/Amap_PathPlanning/test/index.lbs.html',
                            '_blank'
                        );
                    }}
                >
                    牛耕法全屏展示
                </Button>
                <Button
                    onClick={() => {
                        window.open('http://localhost:3006/rf/rf/rf.html', '_blank');
                    }}
                >
                    绕飞法全屏展示
                </Button>
            </div>
        );
    }
}

export default ThisApp;
