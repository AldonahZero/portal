import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

import { get, post } from '../../service/tools';
import * as config from '../../service/config';

let data = [
    [
        'Beverage, instant breakfast powder, chocolate, not reconstituted',
        'Dairy and Egg Products',
        19.9,
        0.285,
        0.385,
        0.4,
        0.07690000000000001,
        0.947,
        66.2,
        65.8,
        1.4,
        7.4,
        357,
        0.56,
        0.314,
        0.278,
        27481,
    ],
    [
        'Beverage, instant breakfast powder, chocolate, sugar-free, not reconstituted',
        'Dairy and Egg Products',
        35.8,
        0.5,
        0.717,
        2,
        0.138,
        1.705,
        41,
        39,
        5.1,
        7.4,
        358,
        2.162,
        1.189,
        1.027,
        27482,
    ],
    [
        'Beverage, milkshake mix, dry, not chocolate',
        'Dairy and Egg Products',
        23.5,
        0.88,
        0.78,
        1.6,
        0.0012,
        2.2,
        52.9,
        51.3,
        2.6,
        12.8,
        329,
        2.059,
        0.332,
        0.06,
        27483,
    ],
];

var indices = {
    name: 0,
    group: 1,
    id: 16,
};

var schema = [
    { name: 'name', index: 0 },
    { name: 'group', index: 1 },
    { name: 'protein', index: 2 },
    { name: 'calcium', index: 3 },
    { name: 'sodium', index: 4 },
    { name: 'fiber', index: 5 },
    { name: 'vitaminc', index: 6 },
    { name: 'potassium', index: 7 },
    { name: 'carbohydrate', index: 8 },
    { name: 'sugars', index: 9 },
    { name: 'fat', index: 10 },
    { name: 'water', index: 11 },
    { name: 'calories', index: 12 },
    { name: 'saturated', index: 13 },
    { name: 'monounsat', index: 14 },
    { name: 'polyunsat', index: 15 },
    { name: 'id', index: 16 },
];

var fieldIndices = schema.reduce(function (obj: any, item: any) {
    obj[item.name] = item.index;
    return obj;
}, {});

var fieldNames = schema.map(function (item) {
    return item.name;
});
fieldNames = fieldNames.slice(2, fieldNames.length - 2);

function getMaxOnExtent(data: any) {
    var colorMax = -Infinity;
    var symbolSizeMax = -Infinity;
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var colorVal = item[fieldIndices[conf.color]];
        var symbolSizeVal = item[fieldIndices[conf.symbolSize]];
        colorMax = Math.max(colorVal, colorMax);
        symbolSizeMax = Math.max(symbolSizeVal, symbolSizeMax);
    }
    return {
        color: colorMax,
        symbolSize: symbolSizeMax,
    };
}

var conf = {
    xAxis3D: 'protein',
    yAxis3D: 'fiber',
    zAxis3D: 'sodium',
    color: 'fiber',
    symbolSize: 'vitaminc',

    onChange: function () {
        var max = getMaxOnExtent(data);
        if (data) {
            // chart.setOption({
            //     visualMap: [{
            //         max: max.color / 2
            //     }, {
            //         max: max.symbolSize / 2
            //     }],
            //     xAxis3D: {
            //         name: conf.xAxis3D
            //     },
            //     yAxis3D: {
            //         name: conf.yAxis3D
            //     },
            //     zAxis3D: {
            //         name: conf.zAxis3D
            //     },
            //     series: {
            //         dimensions: [
            //             conf.xAxis3D,
            //             conf.yAxis3D,
            //             conf.yAxis3D,
            //             conf.color,
            //             conf.symbolSize
            //         ],
            //         data: data.map(function (item:any, idx:any) {
            //             return [
            //                 item[fieldIndices[conf.xAxis3D]],
            //                 item[fieldIndices[conf.yAxis3D]],
            //                 item[fieldIndices[conf.zAxis3D]],
            //                 item[fieldIndices[conf.color]],
            //                 item[fieldIndices[conf.symbolSize]],
            //                 idx
            //             ];
            //         })
            //     }
            // });
        }
    },
};
var max = getMaxOnExtent(data);

// class EchartsDatas extends Component {
//     render() {
//         return (
//             <ReactEcharts
//                 option={option}
//                 lazyUpdate={true}
//                 theme={'dark'}
//                 style={{ height: '580px', width: '100%' }}
//                 className={'react_for_echarts'}
//             />
//         );
//     }
// }

// export default EchartsDatas;

const EchartsDatas: React.FC = () => {
    const DEFAULT_OPTION = {
        tooltip: {},
        visualMap: [
            {
                top: 10,
                calculable: true,
                dimension: 3,
                max: max.color / 2,
                inRange: {
                    color: [
                        '#1710c0',
                        '#0b9df0',
                        '#00fea8',
                        '#00ff0d',
                        '#f5f811',
                        '#f09a09',
                        '#fe0300',
                    ],
                },
                textStyle: {
                    color: '#fff',
                },
            },
            {
                bottom: 10,
                calculable: true,
                dimension: 4,
                max: max.symbolSize / 2,
                inRange: {
                    symbolSize: [10, 40],
                },
                textStyle: {
                    color: '#fff',
                },
            },
        ],
        xAxis3D: {
            name: conf.xAxis3D,
            type: 'value',
        },
        yAxis3D: {
            name: conf.yAxis3D,
            type: 'value',
        },
        zAxis3D: {
            name: conf.zAxis3D,
            type: 'value',
        },
        grid3D: {
            axisLine: {
                lineStyle: {
                    color: '#fff',
                },
            },
            axisPointer: {
                lineStyle: {
                    color: '#ffbd67',
                },
            },
            viewControl: {
                // autoRotate: true
                // projection: 'orthographic'
            },
        },
        series: [
            {
                type: 'scatter3D',
                dimensions: [conf.xAxis3D, conf.yAxis3D, conf.yAxis3D, conf.color, conf.symbolSize],
                data: data.map(function (item: any, idx: any) {
                    return [
                        item[fieldIndices[conf.xAxis3D]],
                        item[fieldIndices[conf.yAxis3D]],
                        item[fieldIndices[conf.zAxis3D]],
                        item[fieldIndices[conf.color]],
                        item[fieldIndices[conf.symbolSize]],
                        idx,
                    ];
                }),
                symbolSize: 12,
                // symbol: 'triangle',
                itemStyle: {
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.8)',
                },
                emphasis: {
                    itemStyle: {
                        color: '#fff',
                    },
                },
            },
        ],
    };
    let count;
    
    const [option, setOption] = useState(DEFAULT_OPTION);
    function fetchNewData() {
        const dataMune = () => get({ url: config.DATA_API });
        dataMune().then((_data) => {
            data = _data;
            console.log(data);
        });
        
        
        option.series[0].data = data;
        setOption(option);
    }

    let timer: any;
    useEffect(() => {
        fetchNewData();
    });

    const loadingOption = {
        text: '加载中...',
        color: '#4413c2',
        textColor: '#ffffff',
        maskColor: '#313653',
        zlevel: 0
      };

    
    function onChartReady(echarts: any) {
        echarts.hideLoading();
      }

    return (
        <ReactEcharts
            option={option}
            // lazyUpdate={true}
            theme={'dark'}
            style={{ height: '580px', width: '100%' }}
            className={'react_for_echarts'}
            
            loadingOption={loadingOption}
            // showLoading={true}
            // onChartReady={onChartReady}
        />
    );
};

export default EchartsDatas;
