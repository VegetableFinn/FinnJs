import React from 'react';
import { DatePicker } from 'antd';
import './App.less';
import { Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;

const storage = window.sessionStorage;

const App = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      currentPage: "home_welcome"
    };

  },
  componentWillReceiveProps(nextProps) {
  },

  componentWillMount(){
    // if(storage.getItem("user") === null){
    //      this.context.router.push('/');
    // }
  },

  componentDidMount(){
    //        this.context.router.push('/');
    //        alert(storage.getItem("abc"));
  },

  handleClick(e) {
    // console.log('click ', e);
    this.setState({
      currentPage: e.key,
    });
  },

  render() {
    return (
      <div className="ant-layout-aside">
        <aside className="ant-layout-sider">
          <Menu onClick={this.handleClick}
            mode="inline"
            theme="dark"
            selectedKeys={[this.state.currentPage]}
            defaultOpenKeys={['home_menu']}>
            <SubMenu
              key="home_menu"
              title={
                <span><Icon type="user" />欢迎回家。</span>
              }>
              <Menu.Item key="home_welcome">
                <Link to="/home/welcome">
                  看一下日程安排吧。
                </Link>
              </Menu.Item>
              <Menu.Item key="home_plan">
                <Link to="/home/plan">
                  看一下计划安排吧。
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header">
          </div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb {...this.props} />
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 590 }}>
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
            "生活就是最精彩的剧本."
          </div>
        </div>
      </div>
    );
  }
});


export default App;
