import './Footer.less';

import React from 'react';
import { Row, Col } from 'antd' ;

const Footer = React.createClass({
  getInitialState() {
    return null;
  },

  render() {
    return (
      <div className="footer">
        <Row className="footer-row">
          <Col span="24">
            <div>
              <Col className="footer-text">“It's time to start living the life you've only imagined.”</Col>
            </div>
          </Col>
        </Row>
      </div>);
  },
});

export default Footer;
