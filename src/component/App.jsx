import React from 'react';
import { DatePicker } from 'antd';
import './App.less';
import { Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;


const App = React.createClass({
    getInitialState() {
        return null;
    },
    componentWillReceiveProps(nextProps) {
    },

    render() {
        return (
            <div className="ant-layout-aside">
              <aside className="ant-layout-sider">
                <div className="ant-layout-logo"></div>
                <Menu mode="inline" theme="dark"
                  defaultSelectedKeys={['home_welcome']} defaultOpenKeys={['home_menu']}>
                  <SubMenu key="home_menu" title={<span><Icon type="user" />HomePage</span>}>
                    <Menu.Item key="home_welcome"><Link to="/home/welcome">Hello Finn.</Link></Menu.Item>
                    <Menu.Item key="2">选项2</Menu.Item>
                    <Menu.Item key="3">选项3</Menu.Item>
                    <Menu.Item key="4">选项4</Menu.Item>
                  </SubMenu>
                </Menu>
              </aside>
              <div className="ant-layout-main">
                <div className="ant-layout-header"></div>
                <div className="ant-layout-breadcrumb">
                  <Breadcrumb {...this.props} />
                </div>
                <div className="ant-layout-container">
                  <div className="ant-layout-content">
                    <div style={{ height: 590 }}>
                      内容区域
                        {this.props.children}
                    </div>
                  </div>
                </div>
                <div className="ant-layout-footer">
                Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
                </div>
              </div>
            </div>
        );
    }
});


export default App;

