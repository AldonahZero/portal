/**
 * .
 */
import React, { useState, useEffect, createContext } from "react";
import { Row, Col, Card, Button, Select } from 'antd';
import ReactEcharts from 'echarts-for-react';
import cloneDeep from 'lodash.clonedeep';
import { Descriptions } from 'antd';
import { Tag, Divider } from 'antd';
import PropTypes from 'prop-types';
import { type } from 'os';

const { Option } = Select;
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
const DEFAULT_OPTION = {
    title: {
        text: '边缘特征',
        subtext: '数据折线图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['数据1']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [
        {
            name: 'values',
            type: 'line',
            data: [],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
};
// interface echartsOption {
//     title: {
//         text: string;
//         subtext: string;
//     };
//     tooltip: {
//         trigger: string;
//     };
//     legend: {
//         data: string[];
//     };
//     toolbox: {
//         show: boolean;
//         feature: {
//             dataZoom: {
//                 yAxisIndex: string;
//             };
//             dataView: {
//                 readOnly: boolean;
//             };
//             restore: {};
//             saveAsImage: {};
//         };
//     };
//     xAxis: {
//         data :Array<number>;
//     };
//     yAxis: {
//         data :Array<number>;
//     };
//     series: {
//         data :Array<number>;
//     }[];
// }

export default function GrayFeatureEcharts({gradata}:any) {
    const [serisesData, setSerisesData] = useState<string>(gradata);

    const [option, setOption] = useState<any>(DEFAULT_OPTION);

function fetchNewData(serisesData:string) {
    let arr:Array<Number>=serisesData.split(",").map(Number);
    console.log(arr)
    const newOption = cloneDeep(option); // immutable
    console.log(newOption)
    const data0 = newOption.series[0].data;
    data0.shift();
    arr.forEach(number => {
        data0.push(number);
    });
    newOption.xAxis.data.shift();
    for(let i =0;i<30;i++){
        newOption.xAxis.data.push(i);
    }
    setOption(newOption);
  }

    useEffect(() => {
        // console.log(serisesData);
        fetchNewData(serisesData);
      }, []);

    return (
        <div className="gutter-example">
        <Row gutter={16}>
            <Col className="gutter-row" md={16}>
                <div className="gutter-box">
                    <Card title="边缘特征" bordered={false}>
                        <ReactEcharts
                            option={option}
                            style={{ height: '300px', width: '100%' }}
                            className={'react_for_echarts'}
                        />
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" md={8}>
                <Card title="选择面板">
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
    )
}
  
GrayFeatureEcharts.propTypes = {
    gradata: PropTypes.string.isRequired,
};