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
              生活就是最精彩的剧本。v.0.10.0
      </div>);
  },
});

export default Footer;
