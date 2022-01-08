import React from 'react';
import { Rate } from 'antd';

const desc = ['常规','非保密', '秘密', '机密', '绝密'];

class MyRater extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (value:any) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}
export default MyRater;