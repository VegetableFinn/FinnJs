import './Header.less';

import React from 'react';
import { Row, Col, Input, Form, message } from 'antd' ;
import util from '../../common/util.js'

const FormItem = Form.Item;

const storage = window.sessionStorage;

const Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    
    getInitialState() {
        return ({
            textInputDisabled: false,
            saySomething: ""
        });
    },
    
    jusySayIt(content){
    },
    
     handleInputChange(e) {
         this.setState({
             saySomething: e.target.value
         });
      },
    
    handleKeyDown(e){
        if(e.keyCode === 13){
            this.setState({
                textInputDisabled: true
            });
            message.config({
                top: 70
            });
            message.loading('我们正在努力地尝试与遥远的服务器取得连接！', 0);
            
            const saySomething = this.state.saySomething;
            $.get(util.getBaseUrl() + "login.json?loginAccount=" + saySomething, function(result) {
              const resultJson = JSON.parse(result);
              message.destroy()
              if(resultJson.success){
                  this.setState({
                      textInputDisabled: true
                  });
                  storage.setItem("user","user");
                  this.context.router.push('/home/welcome');
              }else{
                  message.error("嗯哼，貌似你的口令得不到服务器的认可。", 2);
                  this.setState({
                      textInputDisabled: false
                  });
              }
            }.bind(this));
        }
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
                                    disabled={textInputDisabled} onKeyUp={this.handleKeyDown}/>
                        </div>
                    </Col>
                    
                </Row>
            </div>);
    },
});

export default Header;
