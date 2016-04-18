import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, Redirect, useRouterHistory } from 'react-router';
import { render } from 'react-dom';
import Word from '../component/Word';
import OneHome from '../component/one/OneHome'

// 此处用于添加根路
import { createHashHistory } from 'history';

//const historyConfig =  composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
    
render((
    <Router history={appHistory}>
        <Route path="/home/" breadcrumbName="首页" component={App}>
            <Route path="welcome" breadcrumbName="欢迎" component={Word}></Route>
        </Route>
        <Route path="/" component=  {OneHome}>
            <IndexRoute component={OneHome}/> 
        </Route>
    </Router>
    
), document.getElementById('react-content'));


