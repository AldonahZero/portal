/*
 * Desc: 父子组件传递
 */
import React, { useState, useEffect, createContext } from "react";
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Row, Col, Card } from 'antd';
import GrayFeatureEcharts from '../charts/GrayFeatureEcharts';
import { useParams } from 'react-router-dom';


const GrayFeature = (props: any) => {
    // console.log(props.query.data);
    const [graData, setGraData] = useState<string>(props.query.data);
    return (
        <div>
            <GrayFeatureEcharts gradata={graData}/>
        </div>
    );
};

export default GrayFeature;
