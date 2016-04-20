import './Header.less';

import React from 'react';
import { Row, Col, Input, Form } from 'antd' ;
import util from '../../common/util.js'

const FormItem = Form.Item;

const storage = window.sessionStorage;

const Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    
    getInitialState() {
        return ({
            textInputDisabled: false
        });
    },
    
    jusySayIt(content){
    },
    
     handleInputChange(e) {
//        this.setState({
//          value: e.target.value,
//        });
         $.get(util.getBaseUrl() + "login.json?loginAccount=" + e.target.value, function(result) {
          const resultJson = JSON.parse(result);
          if(resultJson.success){
              this.setState({
                  textInputDisabled: true
              });
              storage.setItem("user","user");
              this.context.router.push('/home/welcome');
          }
        }.bind(this));
      },
    
      handleFocusBlur(e) {
//        this.setState({
//          focus: e.target === document.activeElement,
//        });
          
      },

    render() {
        const textInputDisabled = this.state.textInputDisabled; 
        return (
            <div className="header">
                <Row className="header-row">
                    <Col span="4">
                        <div className="header-logo">
                            <a href="#">FinnAndTheWorld</a>
                        </div>
                    </Col>
                    <Col span="20">
                        <div>
                                <Input id="saySomeThing" size="large" placeholder="如果。你想说点什么。"
                                    autoComplete="off" onChange={this.handleInputChange}
                                    onFocus={this.handleFocusBlur} onBlur={this.handleFocusBlur}
                                    disabled={textInputDisabled}/>
                        </div>
                    </Col>
                    
                </Row>
            </div>);
    },
});

export default Header;
