import React from 'react';
import { Row, Col } from 'antd' ;

      
import App from '../component/App';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, useRouterHistory } from 'react-router';
import { render } from 'react-dom';
import Word from '../component/Word';
import OneHome from '../component/one/OneHome'
import DailyPage from '../component/daily/DailyPage'



// 此处用于添加根路
import { createHashHistory } from 'history';



//const historyConfig =  composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });



const FinnRouter = React.createClass({
  getInitialState() {
    return {
            oneData:{}
        };
  },
    
  
  render() {
    const oneData = this.state.oneData;
    return (
       <Router history={appHistory}>
        <Route path="/home/" breadcrumbName="首页" component={App}>
            <Route path="welcome" breadcrumbName="欢迎" component={DailyPage}></Route>
            <Route path="daily" breadcrumbName="日程记录" component={DailyPage}></Route>
        </Route>
        <Route path="/" component={OneHome}>
            <IndexRoute component={OneHome}/> 
        </Route>
    </Router>
    );
  },
});

export default FinnRouter;


