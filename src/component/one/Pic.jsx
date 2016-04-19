import './Pic.less';

import React from 'react';
import { Row, Col, Spin } from 'antd' ;

const Pic = React.createClass({
  getInitialState() {
    return {
        oneImg: "",
        picLoading: true
    };
  },
    
    componentWillReceiveProps: function(nextProps) {
        const local_url = "http://127.0.0.1:8080/";
        const server_url = "";
      this.setState({
        oneImg: local_url+"one/showImage.json?title="+nextProps.oneImg
      });
    },

    picLoadDone(){
        this.setState({
            picLoading: false
        });
    },

  render() {
      const oneImg = this.state.oneImg;
      const picContainer = (
          <Col className="one-pic-pic">
             <img className="one-pic-pic-img" src={oneImg} onLoad={this.picLoadDone}/>
          </Col>
      );
      
    return (
      <div className="one-pic-main">
        <Row className="one-pic-row">
          <Col span="24">
            <div>
                <Spin spining={this.state.picLoading}>{picContainer}</Spin>
            </div>
          </Col>
        </Row>
      </div>);
  },
});

export default Pic;
