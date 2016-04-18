import './Word.less';

import React from 'react';
import { Row, Col } from 'antd' ;

const Word = React.createClass({
  getInitialState() {
    return {
            oneData:{}
        };
  },
    
  
  render() {
      const oneData = this.state.oneData;
    return (
      <div className="one-word-main">
        <Row className="one-word-row">
          <Col span="24">
            <div>
                <Col className="one-word-word">
                    <p>333</p>
                </Col>
            </div>
          </Col>
        </Row>
      </div>);
  },
});

export default Word;
