import './Pic.less';

import React from 'react';
import { Row, Col } from 'antd' ;

const Pic = React.createClass({
  getInitialState() {
    return {
        oneImg:""
    };
  },
    
    componentDidMount(){
        const oneImg = this.props.oneImg;
        
        this.setState({
          oneImg: oneImg
        });
    },
    
    componentWillReceiveProps: function(nextProps) {
      this.setState({
        oneImg: nextProps.oneImg
      });
    },


  render() {
      const oneImg = this.state.oneImg;
    return (
      <div className="one-pic-main">
        <Row className="one-pic-row">
          <Col span="24">
            <div>
                <Col className="one-pic-pic">
                    <img className="one-pic-pic-img" src={oneImg}/>
                </Col>
            </div>
          </Col>
        </Row>
      </div>);
  },
});

export default Pic;
