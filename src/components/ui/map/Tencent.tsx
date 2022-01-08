import React, { Component } from 'react';
// import data from '../../../../public/Amap_PathPlanning/test/index.js.js';
// import { ToolBarControl } from '@uiw/react-amap';
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

class Data extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '500px' }}>
                <Map
                    amapkey={'788e08def03f95c670944fe2c78fa76f'}
                    center={{ longitude: 116.212034, latitude: 39.933657 }}
                    zoom={11}
                >
                    <MouseTool />
                </Map>
                
              {/* <div >{this.state.what}</div> */}
            </div>
        );
    }
}
export default Data;
