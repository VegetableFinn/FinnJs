import './Word.less';

import React from 'react';
import { Row, Col } from 'antd' ;

const Word = React.createClass({
  getInitialState() {
    return {
            oneData:{}
        };
  },
    
    componentDidMount(){
        const oneParam = this.props.oneData;
        this.setState({
          oneData: oneParam
        });
    },
    
    componentWillReceiveProps: function(nextProps) {
      this.setState({
        oneData: nextProps.oneData
      });
    },

  render() {
      const oneData = this.state.oneData;
    return (
      <div className="one-word-main">
        <Row className="one-word-row">
          <Col span="24">
            <div>
                <Col className="one-word-word">
                    <p>{oneData.content}</p>
                    <p>{oneData.title}</p>
                </Col>
            </div>
          </Col>
        </Row>
      </div>);
  },
});

export default Word;
